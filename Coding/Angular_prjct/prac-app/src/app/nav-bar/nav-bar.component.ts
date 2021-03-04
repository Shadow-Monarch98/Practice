import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { loginService } from '../login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private useSub!: Subscription;
  constructor( private logAuth:loginService){}

  ngOnInit() {
 this.useSub = this.logAuth.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  ngOnDestroy(){
    this.useSub.unsubscribe();
  }

}
