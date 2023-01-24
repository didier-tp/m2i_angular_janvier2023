import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
//jeux de données (en dur) pour pré-version (simulation asynchrone)
private devises : Devise[] = [
  new Devise('EUR','euro',1.0),
  new Devise('USD','dollar',1.1),
  new Devise('GBP','livre',0.9)
];

public getAllDevises$() : Observable<Devise[]>{
    return of(this.devises) //version préliminaire (cependant asynchrone)
          .pipe(
             delay(111) //simuler une attente de 111ms 
          );
}

public convertir$(montant: number,
                 codeDeviseSrc : string, 
                 codeDeviseTarget : string
                 ) : Observable<number> {
    let coeff =  Math.random();//coefficient aleatoire ici (simple simulation)
    let montantConverti = montant * coeff;                    
    return of(montantConverti) //version temporaire (cependant asynchrone)
          .pipe(
               delay(222) //simuler une attente de 222ms 
          );
}
  constructor() { }
}
