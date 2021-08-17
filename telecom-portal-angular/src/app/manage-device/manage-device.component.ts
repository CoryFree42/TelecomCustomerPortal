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
  constructor(service:DeviceService, userManager:UserManagerService) { 
    this.service = service;
    this.devices = [];
    this.userManager = userManager;
  }

  deleteDevice(pNumber:String) {
    this.service.deleteDevice(pNumber).subscribe(result =>{
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.service.getDevices().subscribe(result => this.devices = result)
    this.userManager.setUser(new User(1, "Chris", "Ung", "C.ung3232@gmail.com", "dawdads"))
    console.log(this.userManager.getUser());
  }

}
