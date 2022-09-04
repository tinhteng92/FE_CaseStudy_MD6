import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DetailSellerManagementComponent } from './detail-seller-management/detail-seller-management.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SellerManagementComponent } from './seller-management/seller-management.component';
import { NotAllowSellerListComponent } from './not-allow-seller-list/not-allow-seller-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {NavbarComponent} from "../share/navbar/navbar.component";
import {FooterComponent} from "../share/footer/footer.component";


@NgModule({
  declarations: [
    DetailSellerManagementComponent,
    HomeAdminComponent,
    SellerManagementComponent,
    NotAllowSellerListComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        AppModule,

    ]
})
export class AdminModule { }
