import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Monster, monsterList } from '../monsters';

@Component({
  selector: 'app-monster-select',
  templateUrl: './monster-select.component.html',
  styleUrls: ['./monster-select.component.scss']
})
export class MonsterSelectComponent implements OnInit {
  monsters = monsterList;
  selectedMonster = monsterList[0];

  @Output() select = new EventEmitter<Monster>();

  constructor() { }

  ngOnInit(): void {
  }

  selectMonster(monster: Monster) {
    this.selectedMonster = monster;
  }

  confirmSelected() {
    this.select.emit(this.selectedMonster);
  }
}
