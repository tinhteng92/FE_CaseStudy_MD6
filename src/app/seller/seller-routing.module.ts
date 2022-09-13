import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSellerComponent} from "./home-seller/home-seller.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {EditSellerBannerComponent} from "./edit-seller-banner/edit-seller-banner.component";
import {EditSellerAvatarComponent} from "./edit-seller-avatar/edit-seller-avatar.component";
import {OrderSellerComponent} from "./order-seller/order-seller.component";
import {OrderSellerWaitConfirmComponent} from "./order-seller-wait-confirm/order-seller-wait-confirm.component";
import {OrderSellerDetailComponent} from "./order-seller-detail/order-seller-detail.component";
import {OrderSellerCompleteComponent} from "./order-seller-complete/order-seller-complete.component";
import {OrderSellerCancelComponent} from "./order-seller-cancel/order-seller-cancel.component";
import {SaleManagementComponent} from "./sale-management/sale-management.component";
import {CreateSaleComponent} from "./create-sale/create-sale.component";
import {EditSaleComponent} from "./edit-sale/edit-sale.component";
import {DeleteSaleComponent} from "./delete-sale/delete-sale.component";

const routes: Routes = [
  { path: '',
    component: HomeSellerComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'create-product',
        component: CreateProductComponent
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent
      },
      {
        path: 'edit-seller-banner',
        component: EditSellerBannerComponent
      },
      {
        path: 'edit-seller-avatar',
        component: EditSellerAvatarComponent
      },
      {
        path: 'sale-management',
        component: SaleManagementComponent, children: [

          {
            path: 'edit-sale',
            component: EditSaleComponent
          },
          {
            path: 'delete-sale',
            component: DeleteSaleComponent
          },
        ]
      },
      {
        path: 'create-sale',
        component: CreateSaleComponent
      },
      {
        path: 'order-seller',
        component: OrderSellerComponent, children: [
          {
            path: '',
            component: OrderSellerWaitConfirmComponent, children: [
              {
                path: 'order-seller-detail',
                component: OrderSellerDetailComponent
              },
            ]
          },
          {
            path: 'order-seller-complete',
            component: OrderSellerCompleteComponent, children: [
              {
                path: 'order-seller-detail',
                component: OrderSellerDetailComponent
              }
            ]
          },
          {
            path: 'order-seller-cancel',
            component: OrderSellerCancelComponent, children :[
              {
                path: 'order-seller-detail',
                component: OrderSellerDetailComponent
              }
            ]
          }

        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
