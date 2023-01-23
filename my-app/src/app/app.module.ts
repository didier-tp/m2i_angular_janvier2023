import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ExponentialPipe } from './common/pipe/exponential.pipe';
import { DemoComponent } from './demo/demo.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { ZzComponent } from './demo/zz/zz.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    FooterComponent,
    ExponentialPipe,
    DemoComponent,
    SeuilComponent,
    ListProdComponent,
    RegletteComponent,
    ZzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
