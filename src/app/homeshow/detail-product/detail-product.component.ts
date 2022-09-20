import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {Product} from "../../model/Product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductImage} from "../../model/ProductImage";
import {Sale} from "../../model/Sale";
import {ScriptService} from "../../script.service";
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/order/order.service";
import {SellerService} from "../../service/seller/seller.service";
import {Seller} from "../../model/Seller";
import {CustomerService} from "../../service/customer/customer.service";
import {doc} from "@angular/fire/firestore";
import {Customer} from "../../model/Customer";
import {LoginService} from "../../service/login/login.service";
import {ProductComment} from "../../model/ProductComment";
import {NumStar} from "../../model/NumStar";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  product!: Product;
  productForQuantityStorage!: Product;
  id!: any;
  productImageList: ProductImage [] = [];
  saleList: Sale [] = [];
  topSoldProduct: Product [] =[];
  seller!: Seller;
  valueRate: number = 0;
  commentList: ProductComment[] = [];
  allowComment!: boolean;

  constructor(private script: ScriptService, private productService: ProductCategoryService, private activatedRoute: ActivatedRoute,
              private router: Router, private cartService: CartService, private orderService: OrderService,
              private customerService: CustomerService, private loginService: LoginService) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getProduct();


      this.productService.showProductImageList(this.id).subscribe(images =>{
        this.productImageList =images;
        console.log(images)
      });

      this.customerService.findProductCommentListByProductId(Number(this.id)).subscribe(data =>{
        this.commentList = data;
      })
    });
    console.log(this.product)

    this.allowComment = Boolean(localStorage.getItem("allowComment" + this.id));
  }

  getProduct(){
    this.productService.showDetailProduct(this.id).subscribe(data => {
      this.product = data;
      console.log(data)
      this.productService.showSaleList(this.product.seller.id).subscribe(sales => {
        this.saleList = sales;
        console.log(this.product.seller.id)
        console.log(sales)
      })
    });

  }

  ngOnInit(): void {
    this.productService.showProductBySold().subscribe(data =>{
      this.topSoldProduct =data;
      console.log(data)
    });
  }

  counter(s: number) {
    return new Array(s);
  }
  sentComment(contentComment: string) {
    this.customerService.findCustomerByUserName(this.loginService.getUserToken().username).subscribe(customer =>{
      let productComment={
        id: 0,
        creatAt: null,
        message: contentComment,
        rating: this.valueRate,
        product: this.product,
        customer: customer
      }

      this.customerService.saveProductComment(productComment).subscribe(data =>{
        alert("Comment success!")
        this.customerService.findProductCommentListByProductId(Number(this.id)).subscribe(data =>{
          this.commentList = data;
        });

        this.customerService.changeIsRatedInOrderDetail(Number(localStorage.getItem("idOrderDetail"))).subscribe(orderDetail => {
          localStorage.removeItem("idOrderDetail");
        })
      })
    });

    this.allowComment = false;
    localStorage.removeItem("allowComment"+ this.id);
  }

  showValueStar(valueStar: number) {
    this.valueRate = valueStar;
  }


  addToCart(id: number) {
    if (localStorage.getItem("userToken") != null) {
      this.productService.showDetailProduct(id).subscribe(product =>{
        this.productForQuantityStorage = product;
        if (this.productForQuantityStorage.quantityStorage >= 1) {
          if (this.cartService.productListToCart.length > 0) {
            let check = false;
            for (let i = 0; i < this.cartService.productListToCart.length; i++) {
              if (this.cartService.productListToCart[i].id == id) {
                this.cartService.indexOfDuplicateProduct = i;
                alert("Products already in the cart.\n" +
                  "Please increase the quantity of the product in the cart.");
                this.router.navigate(["/"]);
                check = true;
                break;
              }
            }

            this.customerService.findSellerByProductId(id).subscribe(seller =>{
              console.log("sellllllllllleeeeeerrrrrr" + seller.id)
              console.log("1a")
              if (!check && this.cartService.productListToCart[0].seller.id == seller.id){
                this.productService.showDetailProduct(id).subscribe(data => {
                  this.product = data;
                  this.cartService.productListToCart.push(this.product);
                  console.log("2a");
                  console.log(this.cartService.productListToCart.length)
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
                    this.orderService.saleListToSeller = sales;
                  })
                })
                this.productService.showProductImageList(id).subscribe(images =>{
                  this.productImageList =images;
                  console.log(images)
                })
              } else if (!check && this.cartService.productListToCart[0].seller.id != seller.id) {
                alert("Please only select products from the shop " + this.cartService.productListToCart[0].seller.name +
                  "\nin the same cart");
                this.router.navigate(["/"]);
              }
            })

          } else {
            this.productService.showDetailProduct(id).subscribe(data => {
              this.product = data;

              this.cartService.productListToCart.push(this.product);
              console.log("1b")
              console.log(this.cartService.productListToCart.length)

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
                this.orderService.saleListToSeller = sales;
              })
            })
            this.productService.showProductImageList(id).subscribe(images =>{
              this.productImageList =images;
              console.log(images)
            })
          }
        }else {
          alert("This product is currently out of stock!");
          this.router.navigate(["/"]);
        }
      })

    }else {
      alert("Please login before buying");
      this.router.navigate(["/login"]);
    }
  }

}
