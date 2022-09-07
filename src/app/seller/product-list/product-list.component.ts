import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {ScriptService} from "../../script.service";
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../model/Page";
import {Seller} from "../../model/Seller";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products: Product[] = [];
  //
  // constructor (private sellerService: SellerService, public loginService : LoginService) { }
  //
  // ngOnInit(): void {
  //   this.getRequest();
  // }
  //
  // getRequest(){
  //   this.sellerService.showListProducts(this.loginService.getUserToken().name).subscribe(products => {
  //     this.products = products;
  //   })
  // }
  constructor(private script: ScriptService, private sellerService: SellerService, private activatedRoute: ActivatedRoute,
              private router: Router,public loginService : LoginService) { }

  page!: Page;
  products: Product[] = []
  ngOnInit(): void {
    this.sellerService.showListProducts(0,this.loginService.getUserToken().name ).subscribe((data) => {
      this.page = data
      this.products = this.page.content;
    })
  }

  showListProducts(page: number){
    if (page >= 0 && this.page.totalPages) {
      this.sellerService.showListProducts(page,this.loginService.getUserToken().name).subscribe((data) => {
        this.page = data;
        this.products = this.page.content;
      })
    }
  }
}
