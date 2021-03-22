import { TileModel } from './tile.model';

export class BoardModel {
    
    private tiles: TileModel[];
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

    setTilecanStepInProperty(idTile: number, value: boolean) {
        this.tiles[idTile].setCanStepIn(value);
    }
}