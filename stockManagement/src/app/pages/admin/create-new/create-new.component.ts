import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  constructor(private router: Router) {}

  save() {
    this.router.navigate(['admin', 'dashboard']);
  }

  ngOnInit(): void {}
}
