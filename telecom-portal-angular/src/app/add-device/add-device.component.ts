import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  service:DeviceService;
  constructor(service:DeviceService) { 
    this.service = service;
  }

  ngOnInit(): void {
    
  }

}
