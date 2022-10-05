import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Vehicle } from '../../../components/data-table/data-table.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  vehicle: Vehicle;
  newVehicle: Vehicle;

  constructor(private router: Router, private dataService: DataService) {}

  save() {
    this.router.navigate(['admin', 'dashboard']);
    this.dataService.saveVehicle(this.newVehicle);
  }
  back() {
    this.router.navigate(['admin', 'dashboard']);
  }

  ngOnInit(): void {
    this.newVehicle = {
      RegNo: '',
      Make: '',
      Model: '',
      ModelYear: 0,
      Kilometers: 0,
      Colour: '',
      VIN: '',
      RetailPrice: 0,
      CostPrice: 0,
      Accessories: [
        {
          name: '',
          description: '',
        },
      ],
      images: [
        {
          src: '',
        },
      ],

      DateCreated: new Date(),
      DateUpdated: new Date(),
    };
  }
}
