import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/login-response';
import { LoginService } from '../common/service/login.service';
import { SessionService } from '../common/service/session.service';
import { cloneObject } from '../common/util/util';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm! : FormGroup; //nécessite ReactiveFormsModule dans app.module.ts

 ngOnInit() {
  /*
    //V1 sans FormBuilder
    this.loginForm = new FormGroup({
      username: new FormControl('admin1', [ Validators.required,  Validators.pattern("^[a-zA-Z].+") ] ),
      password: new FormControl( 'pwdadmin1', [Validators.required, Validators.minLength(3) ] ),
      roles: new FormControl('admin',[ Validators.required])
    });
    */
    this.loginForm = this._formBuilder.group({
      username: ['admin1', [ Validators.required,  Validators.pattern("^[a-zA-Z].+") ]],
      password: ['pwdadmin1', [Validators.required, Validators.minLength(3) ]],
      roles: ['admin', [Validators.required]]
      });
 }

  public login : Login = new Login();
  public message :string ="";

  public onLogin(){
    this.login = cloneObject(this.loginForm.value);
     //this.message = "donnees saisies = " + JSON.stringify(this.login); //V1
     console.log("login = " + JSON.stringify(this.login));
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
              public sessionService : SessionService,
              private _formBuilder: FormBuilder) {
     //injection de dépendance
   }

  

}
