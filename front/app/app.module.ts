import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClankGameComponent } from './clank-game/clank-game.component';

import { BoardService } from './services/board.service';

@NgModule({
  declarations: [
    AppComponent,
    ClankGameComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BoardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
