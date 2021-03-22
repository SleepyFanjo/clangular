import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() pseudo: string = '';
  userService = undefined;

  constructor(userService: UserService) {
    this.userService = userService
  }

  ngOnInit(): void {
  }

  handlePseudoChange (value: string): void {
    this.pseudo = value;
  }

  handlePseudoSet (): void {
    this.userService.setPseudo(this.pseudo);
  }

  createRoom (): void {
    this.userService.createRoom();
  }

  joinRoom (roomId: string): void {
    this.userService.joinRoom(roomId);
  }

}
