import { Component, OnInit } from '@angular/core';
import {Seller} from "../../model/Seller";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-detail-seller',
  templateUrl: './detail-seller.component.html',
  styleUrls: ['./detail-seller.component.css']
})
export class DetailSellerComponent implements OnInit {
  seller!: Seller;
  id!: any;
  products: Product[] = [];

  constructor(private productService: ProductCategoryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.productService.showDetailSeller(this.id).subscribe(data => {
        this.seller = data;
        console.log(data)
      });
      this.productService.showProductsBySeller(this.id).subscribe(data => {
        this.products = data;
        console.log(data)
      });

    })
  }
}
