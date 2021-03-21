import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket/websocket.service'
import * as actions from '../../../server/consts/actions'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pseudo: string = undefined;
  isPseudoSet: boolean = false;

  constructor(private websocketService: WebsocketService) {
    this.websocketService.setOnMessageHandler(this.handleAction);
  }

  setPseudo (pseudo: string) {
    this.websocketService.sendMessage({type: actions.USER_SET_NAME, name: pseudo})
  }

  handlePseudoSet (pseudo: string) {
    console.log("handler");
    this.pseudo = pseudo;
    this.isPseudoSet = true;
  }

  handleAction = (action: any) => {
    switch (action.type) {
      case actions.USER_SET_NAME_SUCCESS:
        return this.handlePseudoSet(action.name);
    }
  }
}
