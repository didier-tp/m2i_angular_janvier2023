import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*
  //V1
  constructor(el: ElementRef) {     
    el.nativeElement.style.backgroundColor = 'yellow'; 
  }
  */

  private _defaultColor = 'yellow';

  @Input('myHighlight') 
  public  highlightColor: string = this._defaultColor; 
  
 
 
 @Input() set defaultColor(colorName:string){
   this._defaultColor = colorName || this._defaultColor;
 }
   constructor(private el: ElementRef) {  
   }  
     @HostListener('mouseenter') 
     onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }  
 
    @HostListener('mouseleave') 
    onMouseLeave() { this._highlight(null); }  
 
     private _highlight(color: string | null) 
           {   this.el.nativeElement.style.backgroundColor =  color;   }
 

}
