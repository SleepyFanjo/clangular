import { Injectable } from '@angular/core';
import { BoardModel } from '../models/board.model';

@Injectable({
    providedIn: 'root'
})

export class BoardService {
    board: BoardModel;

    createBoard(): BoardService {
        let tiles = [
            [0,1,2,3]
        ];

        let tilesAccess = [ //   |0|1|2|3|
            [0,1,0,0],      //  0|0|1|0|0|
            [1,0,1,0],      //  1|1|0|1|0|
            [0,1,0,1],      //  2|0|1|0|1|
            [0,1,1,0]       //  3|0|1|1|0|
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
                result.push(index);
            }        
        }

        return result;
    }
}