import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';

@Component({
  selector: 'app-manage-device',
  templateUrl: './manage-device.component.html',
  styleUrls: ['./manage-device.component.css']
})



export class ManageDeviceComponent implements OnInit {

  service:DeviceService;
  devices:Array<Device>;
  constructor(service:DeviceService) { 
    this.service = service;
    this.devices = [];
  }

  deleteDevice(pNumber:String) {
    this.service.deleteDevice(pNumber).subscribe(result =>{
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.service.getDevices().subscribe(result => this.devices = result)
  }

}
