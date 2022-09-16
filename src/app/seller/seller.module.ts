import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditSellerAvatarComponent } from './edit-seller-avatar/edit-seller-avatar.component';
import { EditSellerBannerComponent } from './edit-seller-banner/edit-seller-banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { OrderSellerComponent } from './order-seller/order-seller.component';
import { OrderSellerCancelComponent } from './order-seller-cancel/order-seller-cancel.component';
import { OrderSellerCompleteComponent } from './order-seller-complete/order-seller-complete.component';
import { OrderSellerDetailComponent } from './order-seller-detail/order-seller-detail.component';
import { OrderSellerWaitConfirmComponent } from './order-seller-wait-confirm/order-seller-wait-confirm.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "../share/navbar/navbar.component";
import {FooterComponent} from "../share/footer/footer.component";
import {NgxPaginationModule} from "ngx-pagination";
import {CarouselModule} from "ngx-owl-carousel-o";
import { SaleManagementComponent } from './sale-management/sale-management.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { DeleteSaleComponent } from './delete-sale/delete-sale.component';
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import { EditSellerComponent } from './edit-seller/edit-seller.component';
import { OrderSellerConfirmedComponent } from './order-seller-confirmed/order-seller-confirmed.component';
import { OrderSellerConfirmedDetailComponent } from './order-seller-confirmed-detail/order-seller-confirmed-detail.component';
import {NgxPrintModule} from 'ngx-print'
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    EditSellerComponent,
    DeleteProductComponent,
    CreateProductComponent,
    SellerProfileComponent,
    EditProductComponent,
    EditSellerAvatarComponent,
    EditSellerBannerComponent,
    ProductListComponent,
    HomeSellerComponent,
    OrderSellerComponent,
    OrderSellerCancelComponent,
    OrderSellerCompleteComponent,
    OrderSellerDetailComponent,
    OrderSellerWaitConfirmComponent,
    SaleManagementComponent,
    CreateSaleComponent,
    EditSaleComponent,
    DeleteSaleComponent,
    EditSellerComponent,
    OrderSellerConfirmedComponent,
    OrderSellerConfirmedDetailComponent,
  ],

  imports: [
    FormsModule,
    CommonModule,
   SellerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CarouselModule,
    NgxPrintModule,
    HttpClientModule
  ]
})
export class SellerModule { }
