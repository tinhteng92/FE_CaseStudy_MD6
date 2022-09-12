import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Product} from "../../model/Product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Parameter} from "@angular/fire/compat/remote-config";
import {ProductImage} from "../../model/ProductImage";
import {Sale} from "../../model/Sale";
import {ScriptService} from "../../script.service";
import {CartService} from "../../service/cart/cart.service";

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

  constructor(private script: ScriptService, private productService: ProductCategoryService, private activatedRoute: ActivatedRoute,
              private router: Router, private cartService: CartService) {

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

  addToCart(id: number) {
    if (localStorage.getItem("userToken") != null) {
      if (this.cartService.productListToCart.length > 0) {
        for (let i = 0; i < this.cartService.productListToCart.length; i++) {
          if (this.cartService.productListToCart[i].id == id) {
            this.cartService.indexOfDuplicateProduct = i;
            alert("Products already in the cart.\n" +
              "Please increase the quantity of the product in the cart.");
            this.router.navigate(["/"]);
          }else {

            this.productService.showDetailProduct(id).subscribe(data => {
              this.product = data;

              this.cartService.productListToCart.push(this.product);
              // localStorage.setItem("productListToCart",JSON.stringify(this.cartService.productListToCart));
              //tính tổng tiền trong giỏ hàng
              if (this.cartService.totalCart == 0) {
                this.cartService.totalCart = this.product.price;
              } else {
                this.cartService.totalCart += this.product.price;
              }

              alert("Add to cart success!");
              this.router.navigate(["/"]);
              this.productService.showSaleList(this.product.seller.id).subscribe(sales => {
                this.saleList = sales;
              })
            })
            this.productService.showProductImageList(id).subscribe(images =>{
              this.productImageList =images;
              console.log(images)
            })
          }
        }
      } else {
        this.productService.showDetailProduct(id).subscribe(data => {
          this.product = data;

          this.cartService.productListToCart.push(this.product);
          // localStorage.setItem("productListToCart",JSON.stringify(this.cartService.productListToCart));
          //tính tổng tiền trong giỏ hàng
          if (this.cartService.totalCart == 0) {
            this.cartService.totalCart = this.product.price;
          } else {
            this.cartService.totalCart += this.product.price;
          }

          alert("Add to cart success!");
          this.router.navigate(["/"]);
          this.productService.showSaleList(this.product.seller.id).subscribe(sales => {
            this.saleList = sales;
            // console.log(this.product.seller.id)
            // console.log(sales)
          })
        })
        this.productService.showProductImageList(id).subscribe(images =>{
          this.productImageList =images;
          console.log(images)
        })
      }

    }else {
      alert("Please login before buying");
      this.router.navigate(["/login"]);
    }

  }

}
