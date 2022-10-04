import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { DataTableModule } from '../../components/data-table/data-table.module';
import { ViewEditEntryComponent } from './view-edit-entry/view-edit-entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, ViewEditEntryComponent],
  imports: [CommonModule, AdminRoutingModule, NavbarModule, DataTableModule]
})
export class AdminModule {}
