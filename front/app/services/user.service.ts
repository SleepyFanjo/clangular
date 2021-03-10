import { Injectable, Injector } from '@angular/core';
import { WebsocketService } from './websocket.service'
import { USER_SET_NAME } from '../../../server/consts/actions'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _websocketService = undefined;
  pseudo: string = undefined;
  isPseudoSet: boolean = false;

  constructor(private injector: Injector) {}

  get websocketService() {
    if (this._websocketService === undefined) {
      this._websocketService = this.injector.get(WebsocketService);
    }

    return this._websocketService;
  }

  setPseudo (pseudo: string) {
    this.websocketService.sendMessage({type: USER_SET_NAME, name: pseudo})
  }

  handlePseudoSet (pseudo: string) {
    console.log('handle')
    this.pseudo = pseudo;
    this.isPseudoSet = true;
  }
}
