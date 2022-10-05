import { Injectable } from '@angular/core';
import { Vehicle } from '../components/data-table/data-table.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  openedVehicle: Vehicle;
  carData: Vehicle[] = [
    {
      RegNo: '123456',
      Make: 'Toyota',
      Model: 'Corolla',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 50000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],

      images: [
        {
          src: 'https://img-ik.cars.co.za/specimages/tr:n-stock_large/toyocoro7s4_1.jpg',
        },
      ],

      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '234534534',
      Make: 'BMW',
      Model: 'X5',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Silver',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 65000,
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
      RegNo: '12334444',
      Make: 'Kia',
      Model: 'Picanto',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 105000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],

      images: [
        {
          src: 'https://img.autotrader.co.za/2873049/Crop800x600',
        },
      ],

      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '12123sdf',
      Make: 'Audi',
      Model: 'A1',
      ModelYear: 2019,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 99000,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],
      images: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Audi_A1_Sportback_1.6_TDI_Ambition_%E2%80%93_Frontansicht%2C_5._September_2012%2C_Wuppertal.jpg',
        },
      ],
      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
    {
      RegNo: '234234',
      Make: 'Ford',
      Model: 'f250',
      ModelYear: 2020,
      Kilometers: 10000,
      Colour: 'Red',
      VIN: '123456789',
      RetailPrice: 10000,
      CostPrice: 812300,
      Accessories: [
        { name: 'Aircon', description: 'Aircon' },
        { name: 'Power Steering', description: 'Power Steering' },
      ],
      images: [
        {
          src: 'https://images.squarespace-cdn.com/content/v1/603f9fc6a2120f0be59de63c/81dd0425-6aa7-463c-908a-d49b13ae1c17/BW_2021_Ford+F250_Feature_Hero2.jpg?format=2500w',
        },
      ],
      DateCreated: new Date(),
      DateUpdated: new Date(),
    },
  ];
  constructor() {}

  getData() {
    return this.carData;
  }

  updateVehicle(vehicle: Vehicle, index: number) {
    this.carData[index] = vehicle;
  }

  saveVehicle(vehicle: Vehicle) {
    this.carData.push(vehicle);
  }
  deleteVehicle(index: number) {
    this.carData.splice(index, 1);
    this.carData = [...this.carData];
  }
}
