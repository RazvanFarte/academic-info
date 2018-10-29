import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LSKEY, UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AcademicInfo';
  loggedIn = true;

  constructor(private router: Router, private userService: UserService){

  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  logout() {
    if (localStorage.getItem(LSKEY)) {
      this.userService.logout(localStorage.getItem(LSKEY)).subscribe(response => console.log());
      this.router.navigate(['./login']);
      localStorage.clear();
      this.loggedIn = false;
    }
  }


}
