import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./homeshow/home/home.component";
import {CustomerLoginComponent} from "./auth/customer-login/customer-login.component";
import {DetailProductComponent} from "./homeshow/detail-product/detail-product.component";
import {DetailSellerComponent} from "./homeshow/detail-seller/detail-seller.component";
import {SellerLoginComponent} from "./auth/seller-login/seller-login.component";
import {CustomerRegisterComponent} from "./auth/customer-register/customer-register.component";
import {SellerRegisterComponent} from "./auth/seller-register/seller-register.component";
import {ShowlistProductComponent} from "./homeshow/showlist-product/showlist-product.component";
import {ShowlistSellerComponent} from "./homeshow/showlist-seller/showlist-seller.component";



const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
  {
    path: 'customer-login',
    component: CustomerLoginComponent,
  },
  {
    path: 'detail-seller/:id',
  component: DetailSellerComponent
  },
  {
    path: 'detail-product/:id',
    component: DetailProductComponent
  },
  {
    path: 'seller-detail/:id',
    component: DetailSellerComponent
  },
  {
    path: 'seller-login',
    component: SellerLoginComponent,
  },
  {
    path: 'register-customer',
    component: CustomerRegisterComponent,
  },
  {
    path: 'register-seller',
    component: SellerRegisterComponent,
  },
  {
    path: 'showlist-product',
    component: ShowlistProductComponent,
  },
  {
    path: 'showlist-seller',
    component: ShowlistSellerComponent,
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(module => module.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
