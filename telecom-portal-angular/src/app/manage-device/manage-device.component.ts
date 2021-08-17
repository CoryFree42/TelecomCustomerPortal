import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Plan from '../models/Plan';
import { PlanManagerService } from '../plan-manager.service';


@Component({
  selector: 'app-manage-device',
  templateUrl: './manage-device.component.html',
  styleUrls: ['./manage-device.component.css']
})



export class ManageDeviceComponent implements OnInit {

  service:DeviceService;
  devices:Array<Device>;
  userManager:UserManagerService;
  planService:PlanManagerService;
  user:User;
  tempDevice:Device;
  //plan:Plan;
  closeResult = '';
  constructor(service:DeviceService, userManager:UserManagerService, private modalService: NgbModal, planService:PlanManagerService) { 
    this.service = service;
    this.devices = [];
    this.userManager = userManager;
    this.user = userManager.getUser();
    this.planService = planService;
    this.tempDevice = new Device;
  }

  deleteDevice(pNumber:String) {
    this.service.deleteDevice(pNumber).subscribe(result =>{
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.service.getDevices(this.user.userID).subscribe(result => this.devices = result)
  }

  open(content:any, device:Device) {
    this.tempDevice = new Device(device.phoneNumber, device.deviceName, device.deviceDescription, device.user, device.plan);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result === "Save click"){

        this.service.updateDevice(this.tempDevice).subscribe(element =>{
            device.deviceDescription = this.tempDevice.deviceDescription;
            device.deviceName = this.tempDevice.deviceName;
            device.deviceDescription = this.tempDevice.deviceDescription;
            device.plan = this.tempDevice.plan;
          
        }, err => console.log("There was an error"));

        

      }
    }, (reason) => {
      
    });
  }



}
