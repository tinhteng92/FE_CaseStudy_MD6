import { Component, OnInit } from '@angular/core';
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
    alert(this.loginService.getUserToken().username);
    this.sellerService.showListProducts(this.loginService.getUserToken().username).subscribe(products => {
      this.products = products;
    })
  }

}
