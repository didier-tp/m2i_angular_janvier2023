import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../data/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _apiBaseUrl ="/api/Students";//appel indirect via reverse-proxy (de ng-serve ou autre) ne nécessitant pas autorisations CORS
  //necessite ng serve --proxy-config proxy.conf.json ou équivalent

  constructor(private _http : HttpClient) { }

  public getAllStudents$() : Observable<Student[]>{
      return this._http.get<Student[]>(this._apiBaseUrl);
  }

}
