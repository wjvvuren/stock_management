import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [DataTableComponent],
})
export class DataTableModule {}
