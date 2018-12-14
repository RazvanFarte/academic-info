import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LSKEY, TOKENKEY, UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Error, Information, Warning} from '../communication/communication.component';
import {User} from '../shared/models/User';

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
  loggedIn = false;
  baseURL = 'http://localhost:8080/jbugs/rest';
  recaptchaResponse: any;
  errorOccurred: boolean;
  errorMessage: Error;
  usernameError: boolean;
  usernameInformation: Information;
  passwordInformation: Information;
  failedLoginWarning: Warning;
  failedCounter: number;
  @ViewChild('scrollMe') scrollContainer: ElementRef;
  @ViewChild('parallax') parallax: ElementRef;
  @ViewChild('container-login-username') containerUsername: ElementRef;



  constructor(private userService: UserService, private router: Router, private http: HttpClient) {

    this.loggedIn = userService.isLoggedIn();
    this.errorOccurred = false;
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
    this.failedCounter = 0;

  }

  ngOnInit() {
    this.usernameError = false;
  }


  submitForm() {
    this.errorOccurred = false;
    this.loggedIn = true;

    this.http.post(this.baseURL + '/captcha', this.recaptchaResponse).subscribe((response) => {
      if (response['success'] === true) {
        this.userService.validateUserCredentials(this.userModel.username,
          this.userModel.password).subscribe(
          (credentials_response) => {
              this.login(credentials_response.token);
              localStorage.setItem('id', credentials_response.id);
              this.loggedIn = true;
              this.router.navigate(['./user_profile']);
          },
          (error) => {
            this.errorOccurred = true;
            this.errorMessage = error['error'];
            if (this.errorMessage.id === 1404) {
              this.failedCounter++;
            }


            if (this.failedCounter > 1) {
              this.usernameInformation.display = true;
              this.passwordInformation.display = true;
            }

            if (this.failedCounter > 2) {
              this.failedLoginWarning.display = true;
            }
            this.loggedIn = false;
          }
        );

      } else {
        this.loggedIn = false;
        this.errorOccurred = true;
      }
    },(error)=> {
      this.errorMessage = {
        id: 0,
        type: 'Backend connection refused',
        details: [{
          detail: 'Backend connection refused',
          message: ''
        }]
      };
      this.loggedIn = false;
      this.errorOccurred = true;
    });
    //TODO remove below
    this.router.navigate(['/courses']);
    localStorage.setItem(LSKEY, 'aa');
    localStorage.setItem(TOKENKEY, 'aa');
  }

  login(token: string) {
    localStorage.setItem(LSKEY, this.userModel.username);
    localStorage.setItem(TOKENKEY, token);
    this.loggedIn = true;
  }

  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse;
  }

}
