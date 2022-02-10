import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

// import { LocalStorageService } from '../../local-storage/local-storage.service';
import { SettingsService } from '../../settings/settings.service';
import { WebSpeechService } from '../../web-speech/web-speech.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  settingsForm: FormGroup;
  voices$ = this.speech.getVoices();

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private fb: FormBuilder,
    private settings: SettingsService,
    private speech: WebSpeechService
  ) { }

  ngOnInit(): void {
    const currentSettings = this.settings.getSettings();
    this.settingsForm = this.fb.group({
      preKindergarten: currentSettings.preKindergarten,
      kindergarten: currentSettings.kindergarten,
      firstGrade: currentSettings.firstGrade,
      secondGrade: currentSettings.secondGrade,
      thirdGrade: currentSettings.thirdGrade,
      nouns: currentSettings.nouns,
      voice: currentSettings.voice
    });
  }

  saveSettings() {
    this.settings.setSettings(this.settingsForm.getRawValue());
    this.dialogRef.close();
  }
}
