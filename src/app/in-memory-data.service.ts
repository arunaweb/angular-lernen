import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './int.person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const persons = [
      {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George Loc-Db",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
      },
      {
          "id": 2,
          "email": "janet.weaver@reqres.in",
          "first_name": "Janet Loc-Db",
          "last_name": "Weaver",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      {
          "id": 3,
          "email": "emma.wong@reqres.in",
          "first_name": "Emma Loc-Db",
          "last_name": "Wong",
          "avatar": "https://reqres.in/img/faces/3-image.jpg"
      },
      {
          "id": 4,
          "email": "eve.holt@reqres.in",
          "first_name": "Eve Loc-Db",
          "last_name": "Holt",
          "avatar": "https://reqres.in/img/faces/4-image.jpg"
      },
      {
          "id": 5,
          "email": "charles.morris@reqres.in",
          "first_name": "Charles Loc-Db",
          "last_name": "Morris",
          "avatar": "https://reqres.in/img/faces/5-image.jpg"
      },
      {
          "id": 6,
          "email": "tracey.ramos@reqres.in",
          "first_name": "Tracey Loc-Db",
          "last_name": "Ramos",
          "avatar": "https://reqres.in/img/faces/6-image.jpg"
      }
    ];
    return {persons};
  }

  genId(persons: Person[]): number {
    return persons.length > 0 ? Math.max(...persons.map(person => person.id)) +1 : 6;
  }

  constructor() { }
}
