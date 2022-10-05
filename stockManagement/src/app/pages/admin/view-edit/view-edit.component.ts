import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss'],
})
export class ViewEditComponent implements OnInit {
  // dummy object data cars: registration number and make
  cars = [{ registration: '1234', make: 'Ford' }];

  constructor() {}

  ngOnInit(): void {}
}
