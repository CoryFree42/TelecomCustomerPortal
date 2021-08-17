import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { observable } from 'rxjs';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service'
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})

export class AddDeviceComponent implements OnInit {

  device: Device;
  service: DeviceService;
  userService: UserManagerService;
  constructor(service:DeviceService, userService:UserManagerService) {
    this.device = new Device;
    this.service = service;
    this.userService = userService;
  }

  ngOnInit(): void {
    //i dont think we need this one line
    //this.userService.setUser(new User(1, "Chris", "Ung", "C.ung3232@gmail.com", "dawdads")) 

    this.device
    console.log(this.userService.getUser());
  }

  handleSubmit(): void{
    this.service.saveDevice(this.device).subscribe(result => {
      console.log(result);
    })
  }

}
