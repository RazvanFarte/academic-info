import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Error, Information, Warning} from '../communication/communication.component';
import {login_properties} from "../shared/properties/login-properties";
import {ACCESS_TOKEN, LoginService, REFRESH_TOKEN} from "../services/login/login.service";

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

    let loginData;
    if(this.userModel.username.includes("scs")){
      loginData = login_properties.student_login;
    } else {
      loginData = login_properties.teacher_login;
    }

    loginData.params.username = this.userModel.username;
    loginData.params.password = this.userModel.password;


    this.loginService.validateUserCredentials(loginData)
      .subscribe((response) => {
          localStorage.setItem(ACCESS_TOKEN, response.access_token);
          localStorage.setItem(REFRESH_TOKEN, response.refresh_token);
          this.router.navigate(['/home']);
      },
        (error) => {
          this.errorMessage = error;
          this.failedCounter++;
          if (this.failedCounter > 1) {
            this.usernameInformation.display = true;
            this.passwordInformation.display = true;
          }
          if (this.failedCounter > 2) {
            this.failedLoginWarning.display = true;
          }
        }
      );
  }
  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse;
  }

}
