import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Product} from "../../model/Product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Parameter} from "@angular/fire/compat/remote-config";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product!: Product;
  id!: any;

  constructor(private productService: ProductCategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.productService.showDetailProduct(this.id).subscribe(data => {
        this.product = data;
      })
    });
    console.log(this.product)

  }



  ngOnInit(): void {

  }

}
