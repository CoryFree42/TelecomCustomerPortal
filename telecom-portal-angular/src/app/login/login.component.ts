import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { UserService } from './../user.service';
import { UserManagerService } from '../user-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: User;
  userManager: UserManagerService;
  routerModule: Router;

  constructor(private service: UserService, userManager: UserManagerService, routerModule: Router) { 
    this.formData = new User();
    this.userManager = userManager;
    this.routerModule = routerModule;
  }

  ngOnInit(): void {
  }

  checkValidUser(): void{
    this.service.getUserByEmailPassword(this.formData.email, this.formData.password).subscribe(result => {
      console.log(result);
      if(result != null) {
        this.formData = result;
        this.userManager.setUser(this.formData);
        alert("Successfully logged in as " + this.formData.firstName + " " + this.formData.lastName + "!");
        this.routerModule.navigate(['/dashboard']);
      } else {
        alert("Unsuccessful log in attempt.");
      }
    })
  }
}
