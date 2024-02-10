import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PERSONS } from '../data-persons';
import { Person } from '../int.person';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.css'
})
export class TablePaginationComponent  implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'avatar',    
    'first_name', 
    'last_name', 
    'email', 
  ];
  dataSource = new MatTableDataSource<Person>(PERSONS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
