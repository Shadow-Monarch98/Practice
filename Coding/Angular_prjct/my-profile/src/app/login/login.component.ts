import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from './login.service';

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
  constructor(private logAuth:loginService,private rout:Router){

  }

  onSubmit(form:NgForm){
    console.log(form);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.loadingSpin=true;
    if(this.isLogin){
      this.logAuth.login(email, password).subscribe(resData => {
        console.log(resData);
        this.rout.navigate(['/home']);
        this.loadingSpin = false;
        this.loggedin=true;
      }, error => {
        this.erroru = true;
        this.errorm = 'Incorrect username or password';
        console.log(error);
        this.loadingSpin = false;
      });
      
    }
    else{
      this.logAuth.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.loadingSpin = false;
      }, error => {
        this.erroru=true;
          this.errorm='Password mest be a min of 6 letters';
        console.log(error);
          this.loadingSpin = false;
      });
    }
    
    form.reset();
  }
  onSwitch(){
    this.isLogin=!this.isLogin;
  }


}
