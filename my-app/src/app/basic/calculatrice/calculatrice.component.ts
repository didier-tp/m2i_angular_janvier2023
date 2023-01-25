import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

modeChoisi : string = "simple"; //ou bien "sophistiquee"

a : number | undefined ;
b : number | undefined ; /* =undefined  implicite */
res : number | undefined =undefined;
//res! :number  ;

onCalculer(op:string){
 switch(op){
case "+" :
this.res = Number(this.a) + Number(this.b);break;
//this.res = this.a + this.b; break;
case "-" :
this.res = Number(this.a)- Number(this.b);break;
case "*" :
this.res = Number(this.a) * Number(this.b);break;
default:
  this.res = undefined;
//this.res = 0;//undefined;
}
}

//coordonnées relatives de la souris qui survole une div
x:number|undefined=0; 
y:number|undefined=0;
onMouseMove(evt : MouseEvent){
let currentDiv : HTMLElement= <HTMLElement> evt.target;
this.x = evt.pageX - currentDiv.offsetLeft;
this.y = evt.pageY - currentDiv.offsetTop;
}
onMouseLeave(evt : MouseEvent){
this.x=undefined; this.y=undefined;
}

constructor(route : ActivatedRoute) { 
  route.params.subscribe(
    (params: Params)=> {
      this.modeChoisi = params['mode'];
    }
  )
  //NB:  { path: 'calculatrice/:mode', ... },
}

ngOnInit(): void {}

}
