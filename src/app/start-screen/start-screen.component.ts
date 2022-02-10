import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  @Output() startGame = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettings() {
    this.dialog.open(SettingsDialogComponent);
  }
}
