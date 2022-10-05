import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from '../../../components/data-table/data-table.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss'],
})
export class ViewEditComponent implements OnInit {
  vehicle: Vehicle;
  constructor(
    private router: Router,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  save() {
    this.toastr.success('Vehicle updated successfully', 'Update');

    this.router.navigate(['admin', 'dashboard']);
  }

  back() {
    this.router.navigate(['admin', 'dashboard']);
  }
  ngOnInit(): void {
    this.vehicle = this.dataService.openedVehicle;
  }
}
