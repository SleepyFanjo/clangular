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
        let tiles = [
            new TileModel({value:0, canStepIn: false}),
            new TileModel({value:1, canStepIn: false}),
            new TileModel({value:2, canStepIn: false}),
            new TileModel({value:3, canStepIn: false})
        ];

        let tilesAccess = [                                         //   |0|1|2|3|
            [0,AppConstants.CAN_PASS,0,0],                          //  0|0|1|0|0|
            [AppConstants.CAN_PASS,0,AppConstants.CAN_PASS,0],      //  1|1|0|1|0|
            [0,AppConstants.CAN_PASS,0,AppConstants.CAN_PASS],      //  2|0|1|0|1|
            [0,AppConstants.CAN_PASS,AppConstants.CAN_PASS,0]       //  3|0|1|1|0|
        ];

        let board = new BoardModel({
            tiles: tiles,
            tilesAccess: tilesAccess,
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