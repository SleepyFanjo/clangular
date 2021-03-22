import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../websocket/websocket.service'
import * as actions from '../../../../server/consts/actions'
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomId: string;
  users: Array<string> = [];
  isAdmin: boolean = false;

  constructor(private websocketService: WebsocketService, private router: Router, private location: Location) {
    this.websocketService.setOnMessageHandler(this.handleAction);
  }

  handleRoomJoined (roomId: string, users: Array<string>, isAdmin: boolean) {
    this.roomId = roomId;
    this.users = users;
    this.isAdmin = isAdmin;

    console.log(this.location.path());
    if (this.location.path() !== '/room') {
      this.router.navigate(['/room']);
    }
  }

  handleAction = (action: any) => {
    switch (action.type) {
      case actions.USER_JOINED_ROOM:
        return this.handleRoomJoined(action.roomId, action.users, action.isAdmin)
    }
  }
}
