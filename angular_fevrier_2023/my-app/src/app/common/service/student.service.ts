import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../data/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //private _apiBaseUrl ="https://localhost:7250/api/Students";  //possible si autorisations CORS dans le serveur .net
  // si debut d'url incomplete en "/api/Students" , le navigateur
  // va déclencher une url complete http://localhost:4200/api/Students et donc on passe par le serveur intermédiaire ng serve
  private _apiBaseUrl ="/api/Students";//appel indirect via reverse-proxy (de ng-serve ou autre) ne nécessitant pas autorisations CORS
  //necessite ng serve --proxy-config proxy.conf.json ou équivalent

  constructor(private _http : HttpClient) { }

  public getAllStudents$() : Observable<Student[]>{
      return this._http.get<Student[]>(this._apiBaseUrl);
  }

  public putStudents$(student : Student):Observable<void>{
    let url = this._apiBaseUrl + "/" + student.id;
    return this._http.put<void>(url,student);
  }

  public deleteStudents$(idStudent :number):Observable<void>{
    let url = this._apiBaseUrl + "/" + idStudent;
    return this._http.delete<void>(url);
  }

  public postStudents$(student : Student):Observable<Student>{
    let url = this._apiBaseUrl ;
    return this._http.post<Student>(url,student);
  }

}
