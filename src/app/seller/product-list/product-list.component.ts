import { Component, OnInit } from '@angular/core';
import {Seller} from "../../model/Seller";
import {AdminService} from "../../service/admin/admin.service";
import {Product} from "../../model/Product";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor (private sellerService: SellerService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.getRequest();
  }

  getRequest(){
    this.sellerService.showListProducts(this.loginService.getUserToken().name).subscribe(products => {
      this.products = products;
    })
  }

}
