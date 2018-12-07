import { Injectable } from '@angular/core';
import {LSKEY} from "../user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:port/app';

  constructor(private router: Router,private http: HttpClient) {
  }

  validateUserCredentials(username: string, password: string): Observable<any> {
    let body = {
      'username': username,
      'password': password
    };
    return this.http.post(this.baseURL + '/login',body);
  }

  isLoggedIn() {
    let username = localStorage.getItem(LSKEY);
    return !!username;
  }

  logout(username: String):Observable<any>{

    return this.http.post(this.baseURL + '/logout',username);
  }
}
