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

}
