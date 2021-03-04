export class PlayerModel {

    private pseudo: String;
    private lifePoints: number;
    private handCards: Array<any>;
    private deck: Array<any>;
    private treasures: Array<any>;
    private golds: number;

    // Position on the board
    private position: number[] = [0,0];

    constructor() {
        
    }
}