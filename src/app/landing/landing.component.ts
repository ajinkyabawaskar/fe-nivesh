import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SigninDialogue } from './signin/siginin.dialogue';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = AppConstants.GOOGLE_AUTH_URL;

  animal: string;
  name: string;

  constructor(
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loginNotification: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const token: string = this.route.snapshot.queryParamMap.get('token');
    const error: string = this.route.snapshot.queryParamMap.get('error');

    const showLogin: string = this.route.snapshot.queryParamMap.get('login');

    if (showLogin === 'true') {
      this.openSigninDialogue();
    }

    // user is already logged before coming to login page
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      this.router.navigate(['app']);
      this.loginNotification.open(
        'Welcome back, ' +
          this.getFirstWord(this.currentUser.displayName) +
          '!',
        null,
        {
          duration: 2000,
        }
      );
    }
    // user has logged in right now, carries token in url
    else if (token) {
      this.tokenStorage.saveToken(token);
      this.userService.getCurrentUser().subscribe(
        (data) => {
          this.login(data);
          this.loginNotification.open(
            'Logged in as ' + this.getFirstWord(this.currentUser.email),
            null,
            {
              duration: 2000,
            }
          );
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    // user is not logged in
    else if (error) {
      this.errorMessage = error;
      this.isLoginFailed = true;
      this.loginNotification.open("Oops! Couldn't log you in.", null, {
        duration: 2000,
      });
    }
  }

  login(user): void {
    this.tokenStorage.saveUser(user);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.currentUser = this.tokenStorage.getUser();
    this.router.navigate(['app']);
  }

  getFirstWord(str: string) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
  }

  openSigninDialogue(): void {
    const signinDialogue = this.dialog.open(SigninDialogue, {
      width: 'auto',
      data: { googleURL: this.googleURL, wasInvalidated: true },
      autoFocus: false,
    });

    signinDialogue.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
