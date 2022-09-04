import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterSellerComponent} from "./seller/register-seller/register-seller.component";
import {RegisterCustomerComponent} from "./customer/register-customer/register-customer.component";
import {LoginComponent} from "./login/login/login.component";

const routes: Routes = [
  { path: 'registerSeller', component: RegisterSellerComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
