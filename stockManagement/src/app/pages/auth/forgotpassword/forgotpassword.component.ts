import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  async reset() {
    this.toastr.success('Password reset link sent to your email', 'Reset');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.router.navigate(['auth']);
  }
}
