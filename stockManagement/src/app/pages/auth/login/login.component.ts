import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  today = new Date();
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['admin', 'dashboard']);
  }

  ngOnInit(): void {}
}
