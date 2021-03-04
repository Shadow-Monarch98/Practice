import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
@Input() nu:number;
  constructor() { }

  ngOnInit(): void {
  }
  odd(){
    if (this.nu % 2 === 0) {
      }  else return true;
      
    
  }
    even(){
      if (this.nu % 2 === 0)
       {
            return true;
       }
    }
}