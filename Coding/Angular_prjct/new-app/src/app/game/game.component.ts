import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  i;
  lno=0;
  constructor() { }

  ngOnInit() {
  }
  onStart(){
    this.i = setInterval(() => {
      this.intervalFired.emit(this.lno + 1);
      this.lno++;
    },1000);
    
  }
  onPause(){
    clearInterval(this.i);
  }

}
