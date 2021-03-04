export class BoardModel {
    
    private tiles: Object[];
    private tilesAccess: [];
    private treasures: Array<any>;
    private dragonState: String;
    
    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

    getTiles(): Object[] {
        return this.tiles;
    }

    getTilesAccess() {
        return this.tilesAccess;
    }
}