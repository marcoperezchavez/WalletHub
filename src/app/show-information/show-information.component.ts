import { Component, OnInit } from '@angular/core';
import { StoreInformationService } from '../store-information.service';

@Component({
  selector: 'app-show-information',
  templateUrl: './show-information.component.html',
  styleUrls: ['./show-information.component.css']
})
export class ShowInformationComponent implements OnInit {
  city: string;
  address: string;
  country: string;
  constructor(
    private storeInformationService: StoreInformationService
  ) { }

  ngOnInit() {
    this.city = this.storeInformationService.city;
    this.address = this.storeInformationService.address;
    this.country = this.storeInformationService.country;
  }

}
