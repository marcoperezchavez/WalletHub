import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
name: string = '';
age: string = '';
names: Array<string> = [];
signMessage: string='';


  constructor() { }

  ngOnInit() {

  }

  addName() {
this.names.push(this.name);
this.name = '';
  }

  getSign(event) {
    this.signMessage = event;
  }
}
