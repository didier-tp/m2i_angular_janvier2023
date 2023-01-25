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
import { TogglePanelComponent } from './toggle-panel/toggle-panel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeviseComponent } from './devise/devise.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';

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
    ZzComponent,
    TogglePanelComponent,
    WelcomeComponent,
    LoginComponent,
    ConversionComponent,
    DeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
