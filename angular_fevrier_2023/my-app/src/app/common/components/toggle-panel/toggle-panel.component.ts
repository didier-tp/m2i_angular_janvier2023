import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.css']
})
export class TogglePanelComponent {

  @Input()
  title = "titreParDefaut";

  toggleP = false; //si false : on ne voit que le titre
                   //si true : on void de contenu imbriqué

}
