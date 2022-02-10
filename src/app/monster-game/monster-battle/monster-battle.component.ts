import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { of, Subject } from 'rxjs';
import { filter, takeUntil, delay, tap, take } from 'rxjs/operators';

import { MonsterPlayerComponent } from '../monster-player/monster-player.component';
import { WebSpeechService } from '../../web-speech/web-speech.service';
import { SightWordsService } from '../../sight-words/sight-words.service';
import { Monster, monsterList } from '../monsters';

@Component({
  selector: 'app-monster-battle',
  templateUrl: './monster-battle.component.html',
  styleUrls: ['./monster-battle.component.scss']
})
export class MonsterBattleComponent implements OnInit, OnDestroy {
  @Input() player: Monster;
  @Output() quit = new EventEmitter<void>();

  @ViewChild('playerMonster') playerMonster: MonsterPlayerComponent;
  @ViewChild('computerMonster') computerMonster: MonsterPlayerComponent;

  computer: Monster
  currentWord: string;
  playerHealth = 100;
  computerHealth = 100;
  pregameText = 'Ready...';
  gameOver = false;
  availableWords: string[] = [];
  misses = 0;

  destroy$ = new Subject<void>();

  constructor(
    private speech: WebSpeechService,
    private sightWords: SightWordsService
  ) { }

  ngOnInit(): void {
    const index = Math.floor(Math.random() * monsterList.length);
    this.computer = monsterList[index];

    this.speech.speechEvent
      .pipe(
        takeUntil(this.destroy$),
        filter((res) => !!res)
      )
      .subscribe(results => {
        console.log(results); // debug the results
        if (results?.includes(this.currentWord)) {
          this.computerHealth -= 10;
          this.playerMonster.attack();
          this.setCurrentWord();
        } else {
          this.misses += 1;
          this.playerHealth -= 10;
          this.computerMonster.attack();
        }

        if (this.computerHealth <= 0 || this.playerHealth <= 0) {
          this.endGame();
        }
      });

    this.startGame();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startGame() {
    this.currentWord = '';
    this.gameOver = false;
    this.pregameText = 'Ready...';
    this.playerHealth = 100;
    this.computerHealth = 100;
    this.availableWords = this.sightWords.getWords();

    of(this.pregameText)
      .pipe(
        delay(3000),
        tap(() => this.pregameText = 'Battle!'),
        delay(1000),
        tap(() => this.pregameText = ''),
        take(1)
      ).subscribe(() => {
        this.setCurrentWord();
        this.speech.start();
      });
  }

  setCurrentWord() {
    const index = Math.floor(Math.random() * this.availableWords.length);
    const newWord = this.availableWords.splice(index, 1)[0];
    this.currentWord = newWord;
    this.misses = 0;
  }

  endGame() {
    this.speech.stop();
    this.currentWord = '';
    this.gameOver = true;
  }

  quitGame() {
    this.speech.stop();
    this.quit.emit();
  }

  hearWord() {
    this.speech.stop();
    this.speech.sayWord(this.currentWord)
      .subscribe(() => this.speech.start());
  }

  skipWord() {
    this.setCurrentWord();
  }
}
