import { Injectable } from '@angular/core';
import { w3cwebsocket as WS } from 'websocket'
import * as actions from '../../../server/consts/actions'
import { UserService } from './user.service'

declare global {
  interface Window { sendMessage: any }
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  connection: any;

  constructor(private userService: UserService) {
    this.connection = null;
  }

  connect = () => {
    this.connection = new WS('ws://localhost:8080/', 'echo-protocol');
    // for testing purpose
    window.sendMessage = this.sendMessage;

    this.connection.onmessage = this.handleMessage;
  }

  sendMessage = (message) => {
    this.connection.send(JSON.stringify(message));
  }

  handleMessage = (event: any) => {
    console.log('message received')
    if (typeof event.data === 'string') {
      const action  = JSON.parse(event.data);

      this.handleAction(action);
    }
  }

  handleAction = (action: any) => {
    switch (action.type) {
      case actions.USER_SET_NAME_SUCCESS:
        return this.userService.handlePseudoSet(action.name);
    }
  }
}
