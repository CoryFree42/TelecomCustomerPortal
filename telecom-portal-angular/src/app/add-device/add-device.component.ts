import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { observable } from 'rxjs';
import Device from '../models/Device';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})

export class AddDeviceComponent implements OnInit {

  device: Device;
  service: DeviceService;
  constructor(service:DeviceService) {
    this.device = new Device;
    this.service = service;
  }

  ngOnInit(): void {
    
  }

  handleSubmit(): void{
    this.service.saveDevice(this.device).subscribe(result => {
      console.log(result);
    })
  }

}
