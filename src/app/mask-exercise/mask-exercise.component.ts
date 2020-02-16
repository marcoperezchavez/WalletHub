import { Component, OnInit } from '@angular/core';
import {formatCurrency, getCurrencySymbol} from '@angular/common';

@Component({
  selector: 'app-mask-exercise',
  templateUrl: './mask-exercise.component.html',
  styleUrls: ['./mask-exercise.component.css']
})
export class MaskExerciseComponent implements OnInit {
  cantidad: string = '';
  constructor() { }

  ngOnInit() {
  }

  updateValue(value: string) {
    let val = parseInt(value, 10);
    if (Number.isNaN(val)) {
      val = 0;
    }
    this.cantidad = this.convertCurrency(val);
}

public convertCurrency(val){
  return formatCurrency(val, 'en-US', getCurrencySymbol('USD', 'wide'));
}

showValueMask() {
alert(this.cantidad );
}

}
