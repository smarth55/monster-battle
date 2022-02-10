import { Injectable } from '@angular/core';

import { AppSettings, SettingsService } from '../settings/settings.service';
import { sightWords } from './sight-words';

@Injectable({
  providedIn: 'root'
})
export class SightWordsService {

  constructor(private settings: SettingsService) { }

  getWords() {
    const currentSettings = this.settings.getSettings();
    let words: string[] = [];

    Object.keys(sightWords).forEach(wordGroup => {
      if (currentSettings[wordGroup as keyof AppSettings]) {
        words = words.concat(sightWords[wordGroup]);
      }
    });

    // fallback to all words
    if (words.length === 0) {
      words = Object.values(sightWords).reduce((acc, cur) => acc.concat(cur), []);
    }

    return words;
  }
}
