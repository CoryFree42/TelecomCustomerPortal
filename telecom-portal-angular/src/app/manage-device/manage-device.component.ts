import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Plan from '../models/Plan';


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
  plan:Plan;
  closeResult = '';
  constructor(service:DeviceService, userManager:UserManagerService, private modalService: NgbModal) { 
    this.service = service;
    this.devices = [];
    this.userManager = userManager;
    this.user = userManager.getUser();
    this.plan = new Plan("1", 4, "adwaw", 32.99)
  }

  deleteDevice(pNumber:String) {
    this.service.deleteDevice(pNumber).subscribe(result =>{
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.service.getDevices(this.user.userID).subscribe(result => this.devices = result)
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result === "Save click"){
        console.log(result);
      }

    }, (reason) => {
     
    });
  }


}
