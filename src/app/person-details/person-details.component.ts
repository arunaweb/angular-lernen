import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../int.person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  person: Person | undefined;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

}
