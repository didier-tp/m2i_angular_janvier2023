import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map  } from 'rxjs';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant  =0 ;
  codeDeviseSource  = "EUR" ;
  codeDeviseCible  = "EUR";
  montantConverti  =0;

  listeDevises : Devise[] = []; //à choisir dans liste déroulante.

  constructor(private _deviseService : DeviseService) { }

  onConvertir(){
        console.log("debut de onConvertir")
        this._deviseService.convertir$(this.montant,
                                      this.codeDeviseSource,
                                      this.codeDeviseCible)
                          .subscribe({
                            next: (resultat:number)=>{this.montantConverti=resultat;},
                            error: (err)=>{console.log(err);}
                          });
        console.log("suite immédiate (sans attente) de onConvertir");
        //Attention : sur cette ligne , le résultat n'est à ce stade pas encore connu
        //car appel asynchrone non bloquant et réponse ultérieure via callback
  }

  async onConvertirV2(){
    try{
       this.montantConverti =  await lastValueFrom(this._deviseService.convertir$(this.montant,
                                  this.codeDeviseSource,
                                  this.codeDeviseCible));
       }catch(err){
        console.log(err);
       }           
}


  initListeDevises(tabDevises : Devise[]){
    this.listeDevises = tabDevises;
    if(tabDevises && tabDevises.length > 0){
      this.codeDeviseSource = tabDevises[0].code; //valeur par défaut
      this.codeDeviseCible = tabDevises[0].code; //valeur par défaut
    }
  }

  //ngOnInit() est automatiquement appelée par le framework après le constructeur
  //et après la prise en compte des injections et des éventuels @Input
  ngOnInit(): void {
    this._deviseService.getAllDevises$()
          .pipe(
             map( (tab)=>tab.sort( (d1:Devise,d2:Devise)=>d1.code.localeCompare(d2.code)  ))
          )
         .subscribe({
            next: (tabDev : Devise[])=>{ this.initListeDevises(tabDev); },
            error: (err) => { console.log("error:"+err)}
         });
  }


}
