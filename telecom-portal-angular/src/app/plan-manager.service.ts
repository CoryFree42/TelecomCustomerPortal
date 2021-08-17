import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Plan from './models/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlanManagerService {

  url = "http://localhost:9001/plans";
  plan:any;
  plan1:any;
  plan2:any;
  constructor(private http:HttpClient) {
    this.plan = new Plan;
    this.plan1 = new Plan;
    this.plan2 = new Plan;
    this.getPlan();
   }
   getPlans(): void{
    this.http.get(this.url + "/plan/1").subscribe(result => this.plan = result)
    this.http.get(this.url + "/plan/2").subscribe(result => this.plan1 = result)
    this.http.get(this.url + "/plan/3").subscribe(result => this.plan2 = result)
   }

   getPlan(): Plan{
     return this.plan;
   }

   getPlan1(): Plan{
    return this.plan1;
  }

  getPlan2(): Plan{
    return this.plan2;
  }

  


}
