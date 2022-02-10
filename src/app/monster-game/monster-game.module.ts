import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MonsterGameComponent } from './monster-game.component';
import { MonsterSelectComponent } from './monster-select/monster-select.component';
import { MonsterPlayerComponent } from './monster-player/monster-player.component';
import { MonsterBattleComponent } from './monster-battle/monster-battle.component';
import { HealthBarComponent } from './health-bar/health-bar.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [
    MonsterGameComponent,
    MonsterSelectComponent,
    MonsterPlayerComponent,
    MonsterBattleComponent,
    HealthBarComponent
  ],
  exports: [MonsterGameComponent]
})
export class MonsterGameModule {}