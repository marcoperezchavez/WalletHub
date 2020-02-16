import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {
  @ViewChild('emailInput', {static: true}) EmailInput: ElementRef;
  @ViewChild('telephoneInput', {static: true}) telephoneInput: ElementRef;
  messageValidatorEmail: string = '';
  messageValidatorTelephone: string = '';

  constructor() { }

  ngOnInit() {
  }
   ValidateEmail(){
  var email = this.EmailInput.nativeElement.value;
  var pattern = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
  if (email === '') {
    this.messageValidatorEmail = 'The Email is obligatory';
  } else {
    if (pattern.test(email)) {
      this.messageValidatorEmail = 'Valid Email Format';
        } else {
          this.messageValidatorEmail = 'Invalid Email Format';
        }
  }

}
ValidateTelephone() {
var tel = this.telephoneInput.nativeElement.value;
if (tel.length !== 8){
  this.messageValidatorTelephone = 'The telephone is invalid... should to have only 8 numbers and numbers';
} else {
  this.messageValidatorTelephone = 'The telephone is valid';
}
}
}
