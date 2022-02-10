import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Monster } from './monsters';

@Component({
  selector: 'app-monster-game',
  templateUrl: './monster-game.component.html',
  styleUrls: ['./monster-game.component.scss']
})
export class MonsterGameComponent implements OnInit {
  selectedMonster: Monster;

  @Output() quitGame = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMonster(monster: Monster) {
    this.selectedMonster = monster;
    // start game
  }

  onQuitGame() {
    this.quitGame.emit();
  }
}
