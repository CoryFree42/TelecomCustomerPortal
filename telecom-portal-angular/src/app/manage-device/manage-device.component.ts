import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-manage-device',
  templateUrl: './manage-device.component.html',
  styleUrls: ['./manage-device.component.css']
})



export class ManageDeviceComponent implements OnInit {

  service:DeviceService;
  devices:Array<Device>;
  userManager:UserManagerService;
  user:User;
  constructor(service:DeviceService, userManager:UserManagerService) { 
    this.service = service;
    this.devices = [];
    this.userManager = userManager;
    this.user = userManager.getUser();
  }

  deleteDevice(pNumber:String) {
    this.service.deleteDevice(pNumber).subscribe(result =>{
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.service.getDevices(this.user.userID).subscribe(result => this.devices = result)
  }

}
