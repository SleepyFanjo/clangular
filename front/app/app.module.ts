import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClankGameComponent } from './clank-game/clank-game.component';

import { BoardService } from './services/board.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClankGameComponent,
    IntroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [BoardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
