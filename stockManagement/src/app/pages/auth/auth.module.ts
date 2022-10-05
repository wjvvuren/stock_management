import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MaterialModule } from '../../material/material/material.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { DataTableModule } from '../../components/data-table/data-table.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ForgotpasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    NavbarModule,
    DataTableModule,
  ],
})
export class AuthModule {}
