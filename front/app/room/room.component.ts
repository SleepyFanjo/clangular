import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomService: any;

  constructor(roomService: RoomService, private router: Router) {
    this.roomService = roomService;
  }

  ngOnInit(): void {
  }

  startGame () {
    this.router.navigate(['/clank'])
  }
}
