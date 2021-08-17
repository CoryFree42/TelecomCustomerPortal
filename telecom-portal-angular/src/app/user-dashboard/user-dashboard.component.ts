import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  currentUser: User;
  service: UserService;
  userManager:UserManagerService;  

  constructor(service: UserService, userManager: UserManagerService) {
    this.service = service;
    this.userManager = userManager;
    this.currentUser = userManager.getUser();
  }

  ngOnInit(): void {
    this.service.getUser(this.currentUser.userID).subscribe(result => {
      console.log(result);
      this.currentUser = result;
    });
  }
}
