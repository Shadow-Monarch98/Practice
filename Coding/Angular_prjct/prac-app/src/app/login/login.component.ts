import { Component, Injectable, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginService ,loginResponseData} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLogin = true;
  loadingSpin=false;
  erroru=false;
  errorm: string='';
  loggedin=false;
  constructor(private logAuth:loginService,private rout:Router){}

  onSubmit(form:NgForm){
    console.log(form);
    if(!form.valid){
      return;
    }


    const email = form.value.email;
    const password = form.value.password;
        let authObs: Observable<loginResponseData>;
    this.loadingSpin=true;
       if (this.isLogin) {
      authObs = this.logAuth.login(email, password);
    } else {
      authObs = this.logAuth.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.loadingSpin = false;
        this.rout.navigate(['/homel']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.errorm = errorMessage;
        this.loadingSpin = false;
      }
    );

    form.reset();
  }
  onSwitch(){
    this.isLogin=!this.isLogin;
  }


}
