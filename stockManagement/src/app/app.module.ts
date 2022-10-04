import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewEditEntryComponent } from './pages/admin/view-edit-entry/view-edit-entry.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableModule } from './components/data-table/data-table.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ViewEditEntryComponent],
  imports: [
    DataTableModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
