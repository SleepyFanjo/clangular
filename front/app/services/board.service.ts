import { Injectable } from '@angular/core';
import { BoardModel } from '../models/board.model';
import { TileModel } from '../models/tile.model';
import { AppConstants } from '../app.constants';

@Injectable({
    providedIn: 'root'
})

export class BoardService {
    board: BoardModel;

    createBoard(): BoardService {
        let board = new BoardModel({
            tiles: AppConstants.BASIC_FIELD,
            tilesAccess: AppConstants.BASIC_FIELD_ACCESS_MATRIX,
            treasures: [],
            dragonState: 'sleeping'
        });

        this.board = board;

        return this;
    }

    getBoard(): BoardModel {
        return this.board;
    }

    canAccessTo(origin: number): number[]{
        let result = [];
        let matrix = [];
        matrix = this.board.getTilesAccess();

        for (let index = 0; index < matrix[origin].length; index++) {
            if (matrix[origin][index] === 1) {
                result.push(this.board.getTiles()[index]);
                this.board.setTilecanStepInProperty(index, true);
            }        
        }

        return result;
    }

    resetCanStepIn(): void {
        for (let index = 0; index < this.board.getTiles().length; index++) {
            this.board.setTilecanStepInProperty(index, false);
        }
    }
}