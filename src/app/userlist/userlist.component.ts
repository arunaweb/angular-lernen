import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {

  users: any[] = [];

  constructor(private userlistService: UserlistService) {}

  // ngOnInit(): void {
  //   this.userlistService.getUsers().subscribe((data: any) => {this.users = data.data; });
  // }

  ngOnInit() {
    // this.userlistService.getUsers().subscribe((data: any) => {
    //   this.users = data.data;
    // });

    this.userlistService.getUsers().subscribe(
      (data: any) => {
        this.users = data.data;
      },
      (error: any) => {
        console.error('Ошибка при выполнении запроса:', error);
      }
    );

  }

}
