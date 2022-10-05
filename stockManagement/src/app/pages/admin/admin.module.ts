import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { DataTableModule } from '../../components/data-table/data-table.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { CreateNewComponent } from './create-new/create-new.component';

@NgModule({
  declarations: [DashboardComponent, ViewEditComponent, CreateNewComponent],
  imports: [CommonModule, AdminRoutingModule, NavbarModule, DataTableModule],
})
export class AdminModule {}
