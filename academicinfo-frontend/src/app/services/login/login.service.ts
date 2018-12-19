import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:port/app';

  constructor(private router: Router,private http: HttpClient) {
  }

  validateUserCredentials(loginData): Observable<any> {
    let body = {
      'username': loginData.username,
      'password': loginData.password
    };
    return this.http.post(loginData.url,body);
  }

  isLoggedIn() {
    let access_token = localStorage.getItem(ACCESS_TOKEN);
    return !!access_token || access_token != '';
  }

  logout(username: String):Observable<any>{

    return this.http.post(this.baseURL + '/logout',username);
  }

  getUserId(): number{
    //TODO
    return 1;
  }
}
