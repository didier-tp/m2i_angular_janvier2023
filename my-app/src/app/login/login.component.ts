import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/login-response';
import { LoginService } from '../common/service/login.service';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public login : Login = new Login();
  public message :string ="";

  public onLogin(){
     //this.message = "donnees saisies = " + JSON.stringify(this.login); //V1
     this._loginService.postLogin$(this.login)
         .subscribe({
           next: (response: LoginResponse) => { this.analyserReponse(response);} ,
           error : (err) => { console.log(err);this.message = "erreur technique";
            this.sessionService.isConnected =false;
            this.sessionService.username = "?";}
         });
  }

  analyserReponse(response: LoginResponse){
      this.message = response.message;
      this.sessionService.isConnected=response.status;
      if(response.status)
          this.sessionService.username=response.username;
      else 
      this.sessionService.username= "?";
  }

  constructor(private _loginService: LoginService,
              public sessionService : SessionService) {
     //injection de dépendance
   }

  ngOnInit(): void {
  }

}
