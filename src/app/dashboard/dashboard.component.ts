import { Component, OnInit } from '@angular/core';

import { Person } from '../int.person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons.slice(1, 4));
  }
}
