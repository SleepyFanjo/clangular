import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'clangular';

  constructor(private websocketService: WebsocketService) {
  }

  ngOnInit() {
    this.websocketService.connect()
  }
}
