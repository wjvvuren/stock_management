import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEditComponent } from './view-edit/view-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-edit', component: ViewEditComponent },
  { path: 'create-new', component: CreateNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
