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
  }

  ngOnInit(): void {
    
  }

  selectTile(origin: number) {
    // Need to find a way to reset when we click on the tile again... Or somewhere else, i don't know
    this.canAccessTo(origin);
  }

  canAccessTo(origin: number) {
    this.boardService.resetCanStepIn();
    this.boardService.canAccessTo(origin);
  }

  resetBoardAccess() {
    this.boardService.resetCanStepIn();
  }

  createBoard(): ClankGameComponent {
    this.boardService.createBoard();
    return this;
  }

  getBoard(): BoardModel {
    return this.boardService.getBoard();
  }
}
