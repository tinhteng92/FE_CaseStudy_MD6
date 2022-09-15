import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {SellerManagementComponent} from "./seller-management/seller-management.component";
import {NotAllowSellerListComponent} from "./not-allow-seller-list/not-allow-seller-list.component";
import {DetailSellerManagementComponent} from "./detail-seller-management/detail-seller-management.component";
import {WaitingAcceptSellerComponent} from "./waiting-accept-seller/waiting-accept-seller.component";
import {SellerDetailComponent} from "./seller-detail/seller-detail.component";
import {CustomerManagementComponent} from "./customer-management/customer-management.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent, children: [
      {
        path: '',
        component: SellerManagementComponent
      },
      {
        path: 'not-allow',
        component: NotAllowSellerListComponent
      },
      {
        path: 'waiting-accept-seller',
        component: WaitingAcceptSellerComponent
      },
      {
        path: 'seller-detail/:id',
        component: SellerDetailComponent
      },
      {
        path: 'customer',
        component: CustomerManagementComponent
      },
      {
        path: 'customer-detail/:id',
        component: CustomerDetailComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
