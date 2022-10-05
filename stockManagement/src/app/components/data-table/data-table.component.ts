import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../services/data.service';
export interface Vehicle {
  RegNo: string;
  Make: string;
  Model: string;
  ModelYear: number;
  Kilometers: number;
  Colour: string;
  VIN: string;
  RetailPrice: number;
  CostPrice: number;
  Accessory: string;
  images: string;
  DateCreated: Date;
  DateUpdated: Date;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  faTrash = faTrash;
  carData: Vehicle[];
  displayedColumns: string[] = [
    'RegNo',
    'Make',
    'Model',
    'ModelYear',
    'Kilometers',
    'Colour',
    'VIN',
    'RetailPrice',
    'CostPrice',
    'Accessories',
    'images',
    'DateCreated',
    'DateUpdated',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  viewEdit(vehicle: Vehicle) {
    this.dataService.openedVehicle = vehicle;
    this.router.navigate(['admin', 'view-edit']);
  }
  deleteVehicle(index: number) {
    this.toastr.success('Vehicle deleted', 'Delete');
    this.dataService.deleteVehicle(index);
    this.carData = this.dataService.getData();
  }

  ngOnInit() {
    this.carData = this.dataService.getData();
  }
}
