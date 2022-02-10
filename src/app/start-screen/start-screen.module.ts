import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { StartScreenComponent } from './start-screen.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  declarations: [StartScreenComponent, SettingsDialogComponent],
  exports: [StartScreenComponent]
})
export class StartScreenModule {}