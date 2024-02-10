import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonsListComponent } from './persons-list/persons-list.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'persons-list', component: PersonsListComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
