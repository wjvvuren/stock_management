import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  async logout() {
    this.router.navigate(['auth']);
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.toastr.success('Logged out successfully. Goodbye', 'Logout');
  }

  public isMenuCollapsed = true;
}
