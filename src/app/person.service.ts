import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { Person } from './int.person';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl = 'api/persons';
  // private personsUrl = 'https://reqres.in/api/users';


  // Handle Http operation that failed.
  // Let the app continue.
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  // getPersons(): Observable<Person[]> {
  //   const persons = of(PERSONS);
  //   this.messageService.add('PersonService: fetched persons');
  //   return persons;
  // }

  // getPerson(id: number): Observable<Person> {
  //   const person = PERSONS.find(h => h.id === id)!;
  //   this.messageService.add(`PersonsService: fetched person id=${id}`);
  //   return of(person);
  // }

  ///////// The remote server

  // GET persons from the server
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(
        tap(_ => this.log('fetched persons')),
        catchError(this.handleError<Person[]>('getPersons', []))
      );
  }

  /** GET person by id. Will 404 if id not found */
  getPerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.get<Person>(url)
      .pipe(
        tap(_ => this.log(`fetched person id=${id}`)),
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }


  // Log a PersonService message with the MessageService
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }


}
