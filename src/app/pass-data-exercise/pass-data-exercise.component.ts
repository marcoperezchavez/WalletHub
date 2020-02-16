import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/Address';
import { StoreInformationService } from '../store-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-data-exercise',
  templateUrl: './pass-data-exercise.component.html',
  styleUrls: ['./pass-data-exercise.component.css']
})
export class PassDataExerciseComponent implements OnInit {
  city: string;
  address: string;
  country: string;
  constructor(
    private storeInformationService: StoreInformationService,
    private router: Router) { }

  ngOnInit() {
  }

  saveAddress() {
this.storeInformationService.saveAddress(this.city, this.address, this.country);
this.router.navigateByUrl('/showInformation');
  }

}
