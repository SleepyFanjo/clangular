import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClankGameComponent } from './clank-game/clank-game.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BoardService } from './services/board.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user/user.service';
import { RoomService } from './services/room/room.service';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    ClankGameComponent,
    IntroComponent,
    UserComponent,
    RoomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  providers: [BoardService, {provide: APP_INITIALIZER, multi: true, deps: [UserService, RoomService], useFactory: (myService) => () => null}],
  bootstrap: [AppComponent],
})
export class AppModule {}
