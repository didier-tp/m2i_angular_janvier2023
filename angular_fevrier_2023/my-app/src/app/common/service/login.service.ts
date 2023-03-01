import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _apiBaseUrl ="/login-api";//appel indirect via reverse-proxy (de ng-serve ou autre) ne nécessitant pas autorisations CORS
  //necessite ng serve --proxy-config proxy.conf.json ou équivalent

  constructor(private _http : HttpClient){}

  public postLogin$(login: Login): Observable<LoginResponse>{
       let authUrl : string = this._apiBaseUrl + "/public/auth" ;
       return this._http.post<LoginResponse>(authUrl , login );
  }
}
