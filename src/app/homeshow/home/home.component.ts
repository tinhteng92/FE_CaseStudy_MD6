import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Page} from "../../model/Page";
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {ScriptService} from "../../script.service";
import {ProductCategory} from "../../model/ProductCategory";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private script: ScriptService,private productService: ProductCategoryService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  page!: Page;
  products: Product[] = [];
  p: any;
  categoryList: ProductCategory[] = [];

  ngOnInit(): void {
    this.script.load('bundle', 'owl-carousel', 'min', 'select2','custom', 'loader').then(data => {
    }).catch(error => console.log(error));
    // Show tất cả các sp
    this.productService.showListProduct(0).subscribe((data) => {
      this.page = data
      this.products = this.page.content;
    })

    this.productService.showCategories().subscribe(data => {
      this.categoryList = data;
      console.log("categoryList" + data);

    })
  }

  //Duyệt sản phẩm theo điều kiện
  priceDown(){
      this.productService.showProductByPriceDown().subscribe(data => {
        this.products = data;
        console.log("giảm" + data)
        this.router.navigate(['/home'])
      })
  }

  priceUp(){
    this.productService.showProductByPriceUp().subscribe(data => {
      this.products = data;
      console.log("tăng" + data)
      this.router.navigate(['/home'])
    })
  }

  filterByCategory(id: number) {
    this.productService.showProductByCategory(id).subscribe(data => {
      this.products = data;
      console.log("category" + data);
      this.router.navigate(['/home'])
    })
  }


}


// deleteSeller(id: any) {
//   this.adminService.deleteSeller(id).subscribe(data => {
//     this.showActiveSeller(0);
//     this.router.navigate(['/admin']);
//   }, e => console.log(e));
// }
