import { Component, OnInit, Input } from '@angular/core';

import { Monster } from '../monsters';

@Component({
  selector: 'app-monster-player',
  templateUrl: './monster-player.component.html',
  styleUrls: ['./monster-player.component.scss'],
})
export class MonsterPlayerComponent implements OnInit {
  @Input() monster: Monster;

  animationState = 'idle';

  constructor() { }

  ngOnInit(): void { }

  onAnimationDone() {
    this.animationState = 'idle';
  }

  attack() {
    this.animationState = 'attack';
  }
}
