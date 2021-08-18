import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { observable } from 'rxjs';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service'
import { PlanManagerService } from '../plan-manager.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})

export class AddDeviceComponent implements OnInit {

  device: Device;
  service: DeviceService;
  planService: PlanManagerService;
  user: User;
  constructor(service:DeviceService, userService:UserManagerService, planService:PlanManagerService) {
    this.user = new User;
    this.service = service;
    this.planService = planService;
    this.device = new Device("", "", "", userService.getUser(), planService.getPlan());
  }

  ngOnInit(): void {
  }

  handleSubmit(): void{
    this.service.saveDevice(this.device).subscribe(result => {
      console.log(result);
    })
  }

}
