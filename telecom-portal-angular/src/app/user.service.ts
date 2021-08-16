import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:9001/users';

  constructor(private http: HttpClient) {

  }
  //might not need this
  getAllUsers(): Observable<any>{
    return this.http.get(this.url);
  }

  getUser(user: User): Observable<any>{
    return this.http.get(this.url + '/user/' + user.userID);
  }

  saveUser(user: User): Observable<any>{
    return this.http.post(this.url + '/user', user);
  }
}