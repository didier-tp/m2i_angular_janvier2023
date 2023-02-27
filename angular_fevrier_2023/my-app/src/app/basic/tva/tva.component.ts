import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent {
  ht  = 0; //à saisir
  tauxTva =20; //en % à selectionner dans liste déroulante
  tva = 0; //à calculer et afficher
  ttc = 0; //à calculer et afficher
  listeTaux = [ 5, 10,20]; //taux possibles à choisir

  onCalculTvaTtc() {
    this.tva = this.ht * this.tauxTva/100;
    this.ttc = this.tva + this.ht;
  }
}
