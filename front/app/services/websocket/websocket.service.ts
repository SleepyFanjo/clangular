import { Injectable } from '@angular/core';
import { w3cwebsocket as WS } from 'websocket'

declare global {
  interface Window { sendMessage: any }
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  connection: any;
  onMessageHandler: Array<(event: any) => void> = [];

  constructor() {
    this.connection = null;
  }

  connect = () => {
    this.connection = new WS('ws://localhost:8080/', 'echo-protocol');

    this.connection.onmessage = this.handleMessage;
  }

  sendMessage = (message) => {
    this.connection.send(JSON.stringify(message));
  }

  handleMessage = (event: any) => {
    if (!this.onMessageHandler || this.onMessageHandler.length === 0) {
      console.error('No websocket listener set');
      return
    }

    if (typeof event.data === 'string') {
      const action  = JSON.parse(event.data);

      this.onMessageHandler.forEach((handler) => {
        handler(action);
      })
    }
  }

  setOnMessageHandler = (onMessage: (event: any) => void) => {
    this.onMessageHandler.push(onMessage);
  }
}
