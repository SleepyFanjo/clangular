import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomService: any;

  constructor(roomService: RoomService) {
    this.roomService = roomService;
  }

  ngOnInit(): void {
  }

}
