import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {SellerManagementComponent} from "./seller-management/seller-management.component";
import {NotAllowSellerListComponent} from "./not-allow-seller-list/not-allow-seller-list.component";
import {DetailSellerManagementComponent} from "./detail-seller-management/detail-seller-management.component";

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

    ]
  },
  {
    path: 'detail-seller/:id',
    component: DetailSellerManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
