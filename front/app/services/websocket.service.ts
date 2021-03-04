import { Injectable } from '@angular/core';
import { w3cwebsocket as WS } from 'websocket'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  connection: any;

  constructor() {
    this.connection = null
  }

  connect () {
    this.connection = new WS('ws://localhost:8080/', 'echo-protocol')
  }
}
