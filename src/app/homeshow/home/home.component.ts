import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Page} from "../../model/Page";
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {ScriptService} from "../../script.service";
import {ProductCategory} from "../../model/ProductCategory";
import {Seller} from "../../model/Seller";

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

    // Show tất cả các sp
    this.productService.showListProduct().subscribe(data => {
      this.products = data

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

  search(search: string) {
    this.productService.showListProduct().subscribe(products => {

      let searchProduct: Product[] = [];
      for (const p of products) {
        if (p.name?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
          searchProduct.push(p)
        }
      }
      this.products = searchProduct;
    })
  }


}


// deleteSeller(id: any) {
//   this.adminService.deleteSeller(id).subscribe(data => {
//     this.showActiveSeller(0);
//     this.router.navigate(['/admin']);
//   }, e => console.log(e));
// }
