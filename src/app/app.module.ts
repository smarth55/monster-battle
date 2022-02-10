import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartScreenModule } from './start-screen/start-screen.module';
import { MonsterGameModule } from './monster-game/monster-game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StartScreenModule,
    MonsterGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
