import { Injectable } from '@angular/core';
import { PlayerModel } from '../models/player.model';
import { AppConstants } from '../app.constants';

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    player: PlayerModel;

    initPlayer(): PlayerService {
        this.player = new PlayerModel({pseudo: "Quentin"});

        return this;
    }

    getPlayer() {
        return this.player;
    }

    getPlayerPosition() {
        return this.player.getPosition();
    }

}