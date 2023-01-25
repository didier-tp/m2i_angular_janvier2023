import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { CanActivateGuard } from './common/guard/can-activate.guard';
import { ConversionComponent } from './conversion/conversion.component';
import { DemoComponent } from './demo/demo.component';
import { DeviseComponent } from './devise/devise.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }, 
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path : "not-authorized" , component : NotAuthorizedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'basic', component: BasicComponent ,
    children: [
    { path: 'tva', component: TvaComponent },
    { path: 'calculatrice/:mode', component: CalculatriceComponent },
    { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
    ]
},
  { path: 'conversion', component: ConversionComponent ,
     canActivate : [ CanActivateGuard ]},
  { path: 'demo', component: DemoComponent },
  { path: 'devise', component: DeviseComponent ,
     canActivate : [ CanActivateGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
