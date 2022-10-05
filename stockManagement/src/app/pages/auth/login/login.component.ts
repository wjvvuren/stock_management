import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  today = new Date();
  time: number = Date.now();
  username: string;
  password: string;
  constructor(private router: Router, private toastr: ToastrService) {}

  async login() {
    if (this.username && this.password) {
      this.toastr.success('Authentication successful', 'Login');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.router.navigate(['admin', 'dashboard']);
    } else {
      this.toastr.error('Please enter username and password', 'Login');
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
      console.log(this.today);
    }, 1000);
  }
}
