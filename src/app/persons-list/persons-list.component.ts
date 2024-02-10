import { Component } from '@angular/core';

import { Person } from '../int.person';
import { PersonService } from '../person.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css'
})
export class PersonsListComponent {
  persons: Person[] = [];

  constructor(private personService: PersonService) {};

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }

  ngOnInit(): void {
    this.getPersons();
  }
}
