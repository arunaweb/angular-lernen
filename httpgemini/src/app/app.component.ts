import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HTTP Gemini';

  users: any[];

  constructor(private httpService: HttpService) {
    this.users = [];
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    });
  }



}
