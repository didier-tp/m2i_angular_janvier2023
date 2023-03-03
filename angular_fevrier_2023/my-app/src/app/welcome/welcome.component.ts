import { Component } from '@angular/core';
import { Genre } from '../common/data/genre';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  Genre = Genre;
  genre : Genre = Genre.Inconnu;

  keysOfGenre() : Array<any> {
    var keys = Object.keys(this.Genre);
    return keys.slice(keys.length / 2);
}

  enumGenreAsText(g : Genre){
    return Genre[g];
  }

}
