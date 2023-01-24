import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //private _apiBaseUrl ="http://localhost:8282/devise-api"; 
  private _apiBaseUrl ="/devise-api"; //via ng serve --proxy-config proxy.conf.json

  constructor(private _http : HttpClient){}

  public getAllDevises$() : Observable<Devise[]>{
    let url = this._apiBaseUrl + "/public/devise" ;
    console.log( "url = " + url);
    return this._http.get<Devise[]>(url);
  }

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {
      let url = this._apiBaseUrl + "/public/convert" 
         + `?source=${codeDeviseSrc}`
         + `&target=${codeDeviseTarget}&amount=${montant}` ;
      console.log( "url = " + url);
      return this._http.get<object>(url)
                  .pipe(
                      map( (res:any) => res["result"])
                  );
  }

}
