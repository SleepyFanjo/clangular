import { Component, OnInit } from '@angular/core';
declare global {
  interface Window { particlesJS: any }
}
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.particlesJS.load('js-particles', './assets/intro-particles.json');
  }

}
