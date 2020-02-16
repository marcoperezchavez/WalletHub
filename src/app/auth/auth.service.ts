import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userValid: boolean;
redirectUrl: string;
  constructor() { }

  setValidateAuthentication(user:string){
    this.userValid =  user == 'marco' ? true : false;
  }

  getValidationUser(){
    return this.userValid;
  }
}
