import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/login-response';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isConnected =false;
  public login : Login = new Login();
  public message :string ="";

  public onLogin(){
     //this.message = "donnees saisies = " + JSON.stringify(this.login); //V1
     this._loginService.postLogin$(this.login)
         .subscribe({
           next: (response: LoginResponse) => { this.analyserReponse(response);} ,
           error : (err) => { console.log(err);this.message = "erreur technique";
            this.isConnected =false;}
         });
  }

  analyserReponse(response: LoginResponse){
      this.message = response.message;
      this.isConnected = response.status;
  }

  constructor(private _loginService: LoginService) {
     //injection de dépendance
   }

  ngOnInit(): void {
  }

}
