import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { firstValueFrom } from 'rxjs';
import { messageFromError } from '../common/util/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login : Login = new Login("admin1","pwdadmin1","admin");

  constructor(private _loginService : LoginService){}

  public message :string ="";
  public isConnected = false;

  public async onLogin(){
     console.log("donnees saisies = " + JSON.stringify(this.login));
     try{
       this.isConnected = false;
       let loginResponse  = await firstValueFrom( this._loginService.postLogin$(this.login) );
       this.message = loginResponse.message;
       this.isConnected = loginResponse.status;
     }catch(ex){
      this.message = messageFromError(<any> ex , "echec login ");
      console.log("error:"+ this.message );
     }
  }
}
