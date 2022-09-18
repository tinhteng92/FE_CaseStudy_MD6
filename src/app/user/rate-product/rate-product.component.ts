import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css']
})
export class RateProductComponent implements OnInit {
  idProduct!: number;
  product!: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductCategoryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.idProduct = Number(paramMap.get('id'));

      this.productService.showDetailProduct(this.idProduct).subscribe(data =>{
        this.product = data;
      })


    });
  }

}
