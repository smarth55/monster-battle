import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';

import { SettingsService } from '../settings/settings.service';

// import {sightWords} from '../sight-words';

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
// const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
// const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;

@Injectable({
  providedIn: 'root'
})
export class WebSpeechService {
  recognition: any;
  speechEvent = new BehaviorSubject<string[] | null>(null);

  constructor(
    private ngZone: NgZone,
    private settings: SettingsService
  ) {
    // speechSynthesis.getVoices(); // just to kick start the voices array
        // fromEvent(speechSynthesis, 'voiceschanged')
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.voices = speechSynthesis.getVoices();
    //   });

    // const grammar = '#JSGF V1.0; grammar letters; public <letter> = ' + letters.join(' | ') + ' ;';
    // const speechRecognitionList = new SpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);

    this.recognition = new SpeechRecognition();
    // this.recognition.grammars = speechRecognitionList;
    this.recognition.continuous = true;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 5;

    this.recognition.onresult = (event: any) => {
      this.ngZone.run(() => {
        const lastRes = event.results[event.results.length - 1];
        const results: string[] = [];
        for (let i = 0; i < lastRes.length; i++) {
          const result = lastRes[i].transcript;
          results.push(result.toLocaleLowerCase().trim());
        }
        this.speechEvent.next(results);
      })
    }
  }

  start() {
    this.speechEvent.next(null);
    this.recognition.start();
  }

  stop() {
    this.speechEvent.next(null);
    this.recognition.stop();
  }

  getVoices() {
    const voices = speechSynthesis.getVoices();
    if (voices?.length) {
      return of(voices).pipe(take(1));
    } else {
      return fromEvent(speechSynthesis, 'voiceschanged')
        .pipe(
          take(1),
          map(() => speechSynthesis.getVoices())
        )
    }
  }

  sayWord(word: string) {
    speechSynthesis.cancel();

    return this.getVoices()
      .pipe(switchMap(voices => {
        const settings = this.settings.getSettings();
        const voice = voices.find(v => v.name === settings.voice);
        return new Observable<void>(sub => {
          if (voice && word) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.voice = voice
            speechSynthesis.speak(utterance);

            const interval = setInterval(() => {
              if (!speechSynthesis.speaking) {
                sub.next();
                sub.complete();
                clearInterval(interval);
              }
            }, 250);
          } else {
            sub.next();
            sub.complete();
          }
        });
      }));
  }
}
