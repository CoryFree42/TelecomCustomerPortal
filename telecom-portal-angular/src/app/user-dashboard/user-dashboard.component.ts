import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import User from '../models/User';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  currentUserList: Array<User> = [];
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(result => {
      console.log(result);
      this.currentUserList = result;
    });
  }
}
