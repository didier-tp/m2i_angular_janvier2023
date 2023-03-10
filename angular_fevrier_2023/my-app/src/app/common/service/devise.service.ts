
import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


export interface ConvertResult {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};


//ng g service devise

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //private _apiBaseUrl ="http://localhost:8282/devise-api"; //appel direct sans reverse-proxy nécessitant autorisations CORS
  private _apiBaseUrl ="/devise-api";//appel indirect via reverse-proxy (de ng-serve ou autre) ne nécessitant pas autorisations CORS
  //necessite ng serve --proxy-config proxy.conf.json ou équivalent

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

      const params = new HttpParams()
                      .set('amount', montant.toString())
                      .set('source', codeDeviseSrc)
                      .set('target', codeDeviseTarget);
      let url = this._apiBaseUrl 
             + `/public/convert?${params.toString()}`;
      //console.log( "url = " + url);
      return this._http.get<ConvertResult>(url)
            .pipe(
              map( (res:ConvertResult) => res.result)
            );
  }
}