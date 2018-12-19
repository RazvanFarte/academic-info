import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ACCESS_TOKEN, LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AcademicInfo';
  loggedIn = true;

  constructor(private router: Router, private loginService: LoginService){

  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  logout() {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      this.loginService.logout(localStorage.getItem(ACCESS_TOKEN)).subscribe(response => {});
      this.router.navigate(['./login']);
      localStorage.clear();
      this.loggedIn = false;
    }
  }


}
