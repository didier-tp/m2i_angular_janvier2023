import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public username : string = "?";
  public isConnected : boolean = false;

  constructor() { }
}
