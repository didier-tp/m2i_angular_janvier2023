import { Component, OnInit } from '@angular/core';
import { DeviseService} from '../common/service/devise.service'
import { Devise} from '../common/data/devise'
import { firstValueFrom } from 'rxjs';
import { messageFromError } from '../common/util/utils';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  montant : number =0;
  codeDeviseSource : string = "" ;
  codeDeviseCible : string ="";
  montantConverti : number =0;

  message = "";

  listeDevises : Devise[] =[]; //à choisir dans liste déroulante.

  constructor(private _deviseService : DeviseService) { }

  onConvertirV1(){
        console.log("debut de onConvertir")
        this._deviseService.convertir$(this.montant,
                                      this.codeDeviseSource,
                                      this.codeDeviseCible)
                .subscribe({
                    next : (res :number) => { this.montantConverti = res;
                                      console.log("resultat obtenu en différé")} ,
                    error : (err) => { console.log("error:"+err)}
                   });
        console.log("suite immédiate (sans attente) de onConvertir");
        //Attention : sur cette ligne , le résultat n'est à ce stade pas encore connu
        //car appel asynchrone non bloquant et réponse ultérieure via callback
  }

  async onConvertir(){
    try{
    this.montantConverti = await firstValueFrom(
                  this._deviseService.convertir$(this.montant,
                                                this.codeDeviseSource,
                                                this.codeDeviseCible));
    }catch(ex){
      console.log("error:"+ex);
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
  ngOnInitV1(): void {
    this._deviseService.getAllDevises$()
         .subscribe({
            next: (tabDev : Devise[])=>{ this.initListeDevises(tabDev); },
            error: (err) => { console.log("error:"+err)}
         });
  }

  async ngOnInit() {
    try{
      let tabDev =  await firstValueFrom( this._deviseService.getAllDevises$() );
      this.initListeDevises(tabDev);
    }catch(ex){
      this.message = messageFromError(<any> ex , "echec recuperation des devises ");
      console.log("error:"+ this.message );
    }
  }

}
