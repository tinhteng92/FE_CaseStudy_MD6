import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Page} from "../../model/Page";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductCategoryService) { }

  page!: Page;
  products: Product[] = [];
  p: any;

  ngOnInit(): void {
    this.productService.showListProduct(0).subscribe((data) => {
      this.page = data
      this.products = this.page.content;
    })
  }

  showListProduct(page: number){
  if (page >= 0 && this.page.totalPages) {
    this.productService.showListProduct(page).subscribe((data) => {
      this.page = data;
      this.products = this.page.content;
    })
  }
  }


}

