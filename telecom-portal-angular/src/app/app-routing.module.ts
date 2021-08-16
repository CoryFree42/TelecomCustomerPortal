import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  {
    path: 'dashboard', component: UserDashboardComponent
  }, {
    path: 'new-user', component: NewUserComponent
  }, {
    path: 'bill', component: BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
