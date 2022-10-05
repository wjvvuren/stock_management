import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  async register() {
    this.toastr.success(
      'Registration successful, please check email for confirmation',
      'Register'
    );
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.router.navigate(['auth']);
  }
}
