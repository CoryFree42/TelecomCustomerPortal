import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { UserService } from './../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //formData: User;

  constructor(private service: UserService) { 

  }

  ngOnInit(): void {
  }

  checkValidUser(): void{

  }

}
