import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss'],
})
export class ViewEditComponent implements OnInit {
  constructor(private router: Router) {}

  save() {
    this.router.navigate(['admin', 'dashboard']);
  }
  ngOnInit(): void {}
}
