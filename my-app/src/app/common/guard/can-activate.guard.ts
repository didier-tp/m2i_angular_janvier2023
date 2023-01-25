import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private _sessionService : SessionService,
              private _router : Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._sessionService.isConnected)
      return true; //route/navigation possible pas bloquée
    else
      //return false;//route/navigation  bloquée
      return this._router.parseUrl('/not-authorized');
     //ou bien 
     //return this._router.parseUrl('/login');
     //or this._router.createUrlTree(['/not-authorized']);
  }
  
}
