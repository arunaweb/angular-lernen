import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablePaginationComponent,
    PersonDetailsComponent,
    PersonsListComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
