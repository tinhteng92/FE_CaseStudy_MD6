import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Product} from "../../model/Product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Parameter} from "@angular/fire/compat/remote-config";
import {ProductImage} from "../../model/ProductImage";
import {Sale} from "../../model/Sale";
import {ScriptService} from "../../script.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product!: Product;
  id!: any;
  productImageList: ProductImage [] = [];
  saleList: Sale [] = [];
  topSoldProduct: Product [] =[];

  constructor(private script: ScriptService, private productService: ProductCategoryService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.productService.showDetailProduct(this.id).subscribe(data => {
        this.product = data;
        console.log(data)
        this.productService.showSaleList(this.product.seller.id).subscribe(sales => {
          this.saleList = sales;
          console.log(this.product.seller.id)
          console.log(sales)

        })
      })
      this.productService.showProductImageList(this.id).subscribe(images =>{
        this.productImageList =images;
        console.log(images)
      })

    });
    console.log(this.product)

  }



  ngOnInit(): void {
    // this.script.load('bundle', 'owl-carousel', 'min', 'select2','custom', 'loader').then(data => {
    // }).catch(error => console.log(error));


    this.productService.showProductBySold().subscribe(data =>{
      this.topSoldProduct =data;
      console.log(data)
    })


  }



}
