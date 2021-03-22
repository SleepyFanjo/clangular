import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { BoardModel } from '../models/board.model';
import { PlayerModel } from '../models/player.model';
import { BoardService } from '../services/board.service';
import { PlayerService } from '../services/player.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-clank-game',
  templateUrl: './clank-game.component.html',
  styleUrls: ['./clank-game.component.scss']
})
export class ClankGameComponent implements OnInit, AfterViewInit {

  public board: BoardModel;
  public player: PlayerModel;

  constructor(private elementRef:ElementRef, private boardService: BoardService, private playerService: PlayerService) {
    this.createBoard();
    this.createPlayer();
    this.board = this.getBoard();
    this.player = this.getPlayer();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    let d0 = this.elementRef.nativeElement.querySelector('#tile_0');
    d0.insertAdjacentHTML('beforeend', AppConstants.PAWNHTML);
  }

  selectTile(origin: number) {
    // Need to find a way to reset when we click on the tile again... Or somewhere else, i don't know
    this.canAccessTo(origin);
  }

  canAccessTo(origin: number) {
    this.boardService.resetCanStepIn();
    this.boardService.canAccessTo(origin);
    if (origin === this.player.getPosition())
    {
      console.log("Le joueur est sur cette case !");
    } else {
      if (this.boardService.canAccessToTile(origin, this.player.getPosition())) {
        let currentPosition = this.elementRef.nativeElement.querySelector('#tile_'+this.player.getPosition()+' .pawn');
        currentPosition.remove();
        this.player.setPosition(origin);
        let futurPosition = this.elementRef.nativeElement.querySelector('#tile_'+origin);
        futurPosition.insertAdjacentHTML('beforeend', AppConstants.PAWNHTML);
      }
    }
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

  createPlayer(): ClankGameComponent {
    this.playerService.initPlayer();
    return this;
  }

  getPlayer(): PlayerModel {
    return this.playerService.getPlayer();
  }
}
