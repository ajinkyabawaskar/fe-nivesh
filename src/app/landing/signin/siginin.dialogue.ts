import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConstants } from 'src/environments/environment';

export interface DialogData {
  googleURL: string;
  wasInvalidated: boolean;
}

@Component({
  selector: 'signin-dialogue',
  templateUrl: './signin.dialogue.html',
  styleUrls: ['./signin.dialogue.scss'],
})
export class SigninDialogue {
  constructor(
    public signinDialogue: MatDialogRef<SigninDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  dismissDialogue(): void {
    this.signinDialogue.close();
  }
}
