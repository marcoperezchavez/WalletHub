import { Component, OnInit, Input,OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-menu',
  templateUrl: './child-menu.component.html',
  styleUrls: ['./child-menu.component.css']
})
export class ChildMenuComponent implements OnInit, OnChanges {
@Input() names: Array<string>;
@Input() age: string;
@Output() sign = new EventEmitter();
messageAge: string;
signSelected: string = '';

  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges() {
    this.messageAge = this.validateAge(this.age);
  }
  public validateAge(age) {
    return (Number(age) < 18) ? 'you can not vote' : 'you can vote';
  }

  getSign() {
this.sign.emit(this.signSelected);
  }



}
