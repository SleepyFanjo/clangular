import { Component, OnInit } from '@angular/core';
import { BoardModel } from '../models/board.model';
import { BoardService } from '../services/board.service'

@Component({
  selector: 'app-clank-game',
  templateUrl: './clank-game.component.html',
  styleUrls: ['./clank-game.component.scss']
})
export class ClankGameComponent implements OnInit {

public board: BoardModel;

  constructor(private boardService: BoardService) {
    this.createBoard();
    this.board = this.getBoard();
    console.log(this.board.getTiles());
  }

  ngOnInit(): void {
    
  }

  canAccessTo(origin: number) {
    console.log(origin);
    console.log(this.boardService.canAccessTo(origin));
  }

  createBoard(): ClankGameComponent {
    this.boardService.createBoard();
    return this;
  }

  getBoard(): BoardModel {
    return this.boardService.getBoard();
  }
}
