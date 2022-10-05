import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface carElements {
  RegNo: string;
  Make: string;
  Model: string;
  ModelYear: number;
  Kilometers: number;
  Colour: string;
  VIN: string;
  RetailPrice: number;
  CostPrice: number;
  Accessories: Array<{ name: string; description: string }>;
  images: Array<{ src: string }>;
  DateCreated: Date;
  DateUpdated: Date;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  carData: carElements[] = [
    {
      RegNo: '123456',
      Make: 'Toyota',
      Model: 'Corolla',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 8000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],

      images: [
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
      ],

      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '234',
      Make: 'BMW',
      Model: 'X5',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 8000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],
      images: [
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
      ],
      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '123456',
      Make: 'Toyota',
      Model: 'Corolla',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 8000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],

      images: [
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
      ],

      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '234',
      Make: 'BMW',
      Model: 'X5',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 8000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],
      images: [
        {
          src: 'https://cdn.motor1.com/images/mgl/P3G20A/s3/bmw-x5-m-facelift-rendering-by-kolesa.ru.jpg',
        },
      ],
      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
  ];

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

  constructor(private router: Router) {}

  viewEdit() {
    this.router.navigate(['admin', 'view-edit']);
  }

  delete(index: number) {
    this.carData.splice(index, 1);

    this.carData = [...this.carData];
  }

  ngOnInit() {}
}
