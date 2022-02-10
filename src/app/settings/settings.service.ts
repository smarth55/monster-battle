import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';

export interface AppSettings {
  preKindergarten: boolean;
  kindergarten: boolean;
  firstGrade: boolean;
  secondGrade: boolean;
  thirdGrade: boolean;
  nouns: boolean;
  voice: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  default: AppSettings = {
    preKindergarten: false,
    kindergarten: false,
    firstGrade: false,
    secondGrade: false,
    thirdGrade: false,
    nouns: false,
    voice: 'Google US English'
  }

  constructor(private storage: LocalStorageService) { }

  setSettings(settings: AppSettings) {
    this.storage.set('settings', settings);
  }

  getSettings() {
    return this.storage.get<AppSettings>('settings') || this.default;
  }
}
