import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(    private _templateRef: TemplateRef<any>,  
                  private _viewContainer: ViewContainerRef    ) { 
  } 

@Input() set appUnless(condition: boolean) {  
  if (!condition) {     
    this._viewContainer.createEmbeddedView(this._templateRef);    } 
  else {      
    this._viewContainer.clear();    
  }  
  }

}
