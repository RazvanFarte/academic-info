import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Error, Information, Warning} from '../shared/components/communication/communication.component';
import {ACCESS_TOKEN, LoginService, REFRESH_TOKEN} from "../shared/services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = {
    username: '',
    password: ''
  };
  recaptchaResponse: any;
  errorMessage: Error;
  usernameInformation: Information;
  passwordInformation: Information;
  failedLoginWarning: Warning;
  failedCounter: number;

  constructor(private loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this.failedCounter = 0;
    this.usernameInformation = {
      message: 'Username was generated based on your first and last names. Please contact the administrator if forgotten',
      display: false
    };
    this.passwordInformation = {
      message: 'Your password was given by the administrator, please contact him if forgotten.',
      display: false
    };
    this.failedLoginWarning = {
      message: 'After 5 unsuccessful logins your account will be disabled and your administrator notified.',
      recommendation: null,
      display: false
    };
    this.errorMessage = null;
  }


  submitForm() {


  }
  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse;
  }

}
