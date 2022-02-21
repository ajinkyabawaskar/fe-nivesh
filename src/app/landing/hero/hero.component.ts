import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/environments/environment';

import { MatDialog } from '@angular/material/dialog';
import { SignupDialogue } from '../signup/signup.dialogue';

@Component({
  selector: 'landing-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  googleURL: string = AppConstants.GOOGLE_AUTH_URL;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openSignupDialogue(): void {
    const signupDialogue = this.dialog.open(SignupDialogue, {
      width: 'auto',
      data: { googleURL: this.googleURL },
      autoFocus: false,
    });

    signupDialogue.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
