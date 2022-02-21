import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { SigninDialogue } from '../signin/siginin.dialogue';
import { AppConstants } from 'src/environments/environment';

@Component({
  selector: 'landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  googleURL: string = AppConstants.GOOGLE_AUTH_URL;

  title: string = 'Nivesh';
  isLoginPage: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {
    this.isLoginPage = this.router.url === '/' ? true : false;
  }

  ngOnInit(): void {}

  openSigninDialogue(): void {
    const signinDialogue = this.dialog.open(SigninDialogue, {
      width: 'auto',
      data: { googleURL: this.googleURL, wasInvalidated: false },
      autoFocus: false,
    });

    signinDialogue.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
    });
  }
}
