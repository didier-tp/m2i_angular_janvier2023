import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  ht : number | undefined;
  taux = 20; //par defaut;
  tva : number | undefined;
  ttc : number | undefined;

  listeTaux = [ 5 , 10, 20] ; //en %

  onSelectTauxEtCalculTvaEtTtc(t:number){
    this.taux = t;
    this.onCalculTvaEtTtc();
  }

  onCalculTvaEtTtc(){
     if(this.ht!=undefined){
         this.tva = this.ht * this.taux / 100;
         this.ttc = this.ht + this.tva;
     }else{
      this.tva = undefined; this.ttc = undefined;
     }
  }

  setClasses(){
    return {
      "negatif" : this.ht && this.ht < 0,
      "positif" : this.ht && this.ht >= 0,
      "enEvidence" : true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
