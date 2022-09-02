import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { UploadImageComponent } from './upload/upload-image/upload-image.component';
import { HomeComponent } from './homeshow/home/home.component';
import { DetailProductComponent } from './homeshow/detail-product/detail-product.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './auth/customer-register/customer-register.component';
import { SellerRegisterComponent } from './auth/seller-register/seller-register.component';
import { SellerLoginComponent } from './auth/seller-login/seller-login.component';
import { ShowlistProductComponent } from './homeshow/showlist-product/showlist-product.component';
import { ShowlistSellerComponent } from './homeshow/showlist-seller/showlist-seller.component';
import { DetailSellerComponent } from './homeshow/detail-seller/detail-seller.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        UploadImageComponent,
        HomeComponent,
        DetailProductComponent,
        CustomerLoginComponent,
        CustomerRegisterComponent,
        SellerRegisterComponent,
        SellerLoginComponent,
        ShowlistProductComponent,
        ShowlistSellerComponent,
        DetailSellerComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        // NgxPaginationModule,
        AppRoutingModule,
        // CarouselModule,
        // AngularFireStorageModule,
        // AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
    ],

    providers: [],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
