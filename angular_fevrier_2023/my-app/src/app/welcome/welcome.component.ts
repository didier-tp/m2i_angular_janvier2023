import { Component } from '@angular/core';
import { Genre } from '../common/data/genre';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  //NB: export enum Genre{    Monsieur,    Madame,    Inconnu} dans common/data/genre.ts
  Genre = Genre; //pour pouvoir ecrire Genre[genre] coté .html
  GenreNumberKeys : number[] = []; // [ 0 , 1 , 2] construit pas extractKeysOfGenre()
  GenreStringKeys : string[]= []; // [ "Monsieur" , "Madame" , "Inconnu"] construit pas extractKeysOfGenre()
  
  genre : Genre = Genre.Inconnu; //ici ou bien dans objet 

  extractKeysOfGenre() : void {
    var keys = Object.keys(this.Genre);
    let indexMilieu = keys.length / 2;
    for(let i=0;i<indexMilieu;i++){
      this.GenreNumberKeys.push(Number(keys[i]));
    }
    for(let i=indexMilieu;i<keys.length;i++){
      this.GenreStringKeys.push(keys[i]);
    }
  }

  constructor(){
    this.extractKeysOfGenre();
  }


}
