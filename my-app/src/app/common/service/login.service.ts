import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    //private _apiBaseUrl ="http://localhost:8282/login-api"; 
    private _apiBaseUrl ="/login-api"; //via ng serve --proxy-config proxy.conf.json

  constructor(private _http : HttpClient) { }

  public postLogin$(login: Login): Observable<LoginResponse>{
    let url= this._apiBaseUrl + "/public/auth";
     return this._http.post<LoginResponse>(url,login);
     //nb: "application/json" is default Content-Type
  }
}
