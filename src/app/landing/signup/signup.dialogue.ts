import { Component, enableProdMode, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SignupDialogueData {
  googleURL: string;
}

@Component({
  selector: 'signup-dialogue',
  templateUrl: './signup.dialogue.html',
  styleUrls: ['./signup.dialogue.scss'],
})
export class SignupDialogue {
  agree: boolean = false;
  showAgreePrompt: boolean = false;

  constructor(
    public signupDialogue: MatDialogRef<SignupDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: SignupDialogueData
  ) {}

  dismissDialogue(): void {
    this.signupDialogue.close();
  }

  toggleAgree(agree: boolean): void {
    if (agree) {
      this.agree = true;
      this.showAgreePrompt = false;
    } else {
      this.agree = false;
    }
  }
  signup() {
    if (this.agree) {
      this.showAgreePrompt = false;
      window.location.href = this.data.googleURL;
      this.signupDialogue.close();
    } else {
      this.showAgreePrompt = true;
    }
  }
}
