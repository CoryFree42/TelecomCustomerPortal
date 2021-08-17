import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BillComponent } from './bill/bill.component';
import { LoginComponent } from './login/login.component';
import { ManageDeviceComponent } from './manage-device/manage-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';

const routes: Routes = [
  {
    path: 'dashboard', component: UserDashboardComponent
  }, {
    path: 'new-user', component: NewUserComponent
  }, {
    path: 'bill', component: BillComponent
  },{
    path: 'device', component: ManageDeviceComponent
  },{
    path: 'add-device', component: AddDeviceComponent
  },{
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
