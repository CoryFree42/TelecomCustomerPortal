import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import User from '../models/User';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  currentUser: User = new User();
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getUser(1).subscribe(result => { //FIXME: need a way to automatically pass userId as parameter instead of a number
      console.log(result);
      this.currentUser = result;
    });
  }
}
