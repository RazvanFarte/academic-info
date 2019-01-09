import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ACCESS_TOKEN} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router)
  {

  }

  routeIfNotLoggedIn()
  {
    if( localStorage.getItem(ACCESS_TOKEN)){
      return true;
    }
    else {
      this.router.navigate(['./login']);
      return false;
    }
  }

}
