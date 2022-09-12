import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CartDetailUserComponent } from './cart-detail-user/cart-detail-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListcartUserComponent } from './listcart-user/listcart-user.component';
import { OrderDetailUserComponent } from './order-detail-user/order-detail-user.component';
import { OrderUserComponent } from './order-user/order-user.component';
import { EditUserAvatarComponent } from './edit-user-avatar/edit-user-avatar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SellerModule} from "../seller/seller.module";
import { WishlistComponent } from './wishlist/wishlist.component';
import {NgxPaginationModule} from "ngx-pagination";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    CartDetailUserComponent,
    DetailUserComponent,
    EditUserComponent,
    HomeUserComponent,
    ListcartUserComponent,
    OrderDetailUserComponent,
    OrderUserComponent,
    EditUserAvatarComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SellerModule,
    NgxPaginationModule,
    CarouselModule,
  ]
})
export class UserModule { }
