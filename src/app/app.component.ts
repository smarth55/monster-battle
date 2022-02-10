import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playing = false;

  onStartGame() {
    this.playing = true;
  }

  onQuitGame() {
    this.playing = false;
  }
}
