import { Injectable } from '@angular/core';
import { Address } from '../app/Models/Address';

@Injectable({
  providedIn: 'root'
})
export class StoreInformationService {
  city: string;
  address: string;
  country: string;

  constructor() { }

  saveAddress(city, address, country) {
    this.city = city;
    this.address = address;
    this.country = country;
  }


}
