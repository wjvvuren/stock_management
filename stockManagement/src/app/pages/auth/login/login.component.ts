import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  today = new Date();
  time: number = Date.now();
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['admin', 'dashboard']);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
      console.log(this.today);
    }, 1000);
  }
}
