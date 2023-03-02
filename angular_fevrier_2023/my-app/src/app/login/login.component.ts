import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { firstValueFrom } from 'rxjs';
import { messageFromError } from '../common/util/utils';
import { SessionService } from '../common/service/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login : Login = new Login("admin1","pwdadmin1","admin");

  constructor(private _loginService : LoginService ,
              public sessionService : SessionService){}

  public message :string ="";
  

  public async onLogin(){
     console.log("donnees saisies = " + JSON.stringify(this.login));
     try{
       this.sessionService.isConnected = false;
       let loginResponse  = await firstValueFrom( this._loginService.postLogin$(this.login) );
       this.message = loginResponse.message;
       this.sessionService.isConnected = loginResponse.status;
       if(loginResponse.status)
               this.sessionService.username = loginResponse.username;
           else
              this.sessionService.username = "?"
     }catch(ex){
      this.message = messageFromError(<any> ex , "echec login ");
      console.log("error:"+ this.message );
      this.sessionService.username = "?";
     }
  }
}
