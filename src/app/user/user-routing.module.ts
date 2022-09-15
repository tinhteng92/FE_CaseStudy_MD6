import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeUserComponent} from "./home-user/home-user.component";
import {ListcartUserComponent} from "./listcart-user/listcart-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {EditUserAvatarComponent} from "./edit-user-avatar/edit-user-avatar.component";
import {OrderUserComponent} from "./order-user/order-user.component";
import {OrderDetailUserComponent} from "./order-detail-user/order-detail-user.component";
import {ThanksComponent} from "./thanks/thanks.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";

const routes: Routes = [
  {path: '',
  component: HomeUserComponent, children: [
      { path: 'listCartUser/:id',
        component: ListcartUserComponent
      },
      {
        path: 'edit-customer',
        component: EditUserComponent
      },
      {
        path: 'detail-user/:id',
        component: DetailUserComponent
      },
      {
        path: 'edit-customer-change-avatar',
        component: EditUserAvatarComponent
      }
    ]},
  {
    path: 'order-user',
    component: OrderUserComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },

  { path: 'order-detail-user',
    component: OrderDetailUserComponent
  },
  { path: 'order-detail-user/:id',
    component: OrderDetailUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
