import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  username =""; //à saisir
  message=""; //à afficher

  onAction(){
    this.message = "Bonjour " + this.username;
  }

  valeurCurseur /*:number*/ =0;
  
onChangeCurseur(event : any){
 const evt : {value:number} = event;
 this.valeurCurseur = evt.value;
}

}
