import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart/cart.service";
import {Product} from "../../model/Product";
import {OrderService} from "../../service/order/order.service";
import {CustomerService} from "../../service/customer/customer.service";
import {LoginService} from "../../service/login/login.service";
import {Customer} from "../../model/Customer";
import {Cart} from "../../model/Cart";
import {CartDetail} from "../../model/CartDetail";
import {OrderStatus} from "../../model/OrderStatus";
import {Sale} from "../../model/Sale";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {
  totalDiscount: number = 0;
  totalPayment: number = 0;
  addressCustomer: string = "";
  customer!: Customer;
  // cartDetail!: CartDetail;

  constructor(public cartService: CartService, public orderService: OrderService, private customerService: CustomerService,
  private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.findCustomerByUserName(this.loginService.getUserToken().username).subscribe((data)=>{
      this.addressCustomer = data.address;
      this.customer = data;
    })
  }

  applyCoupon(priceDiscount: any) {
    this.totalDiscount = Math.round( this.cartService.totalCart * priceDiscount / 100);
    this.totalPayment = this.cartService.totalCart - this.totalDiscount;
  }

  payment() {
    // gọi API lưu cart
       this.orderService.saveCart(this.customer).subscribe((data) =>{
        this.cartService.cart = data;
        console.log("carttttt" + this.cartService.cart.id);

        // gọi API lưu cartDetail
        for (let i = 0; i < this.cartService.productListToCart.length; i++) {
          let cartDetail = {
            id: i,
            cart: data,
            product: this.cartService.productListToCart[i],
            seller: this.cartService.productListToCart[0].seller,
            quantity: this.cartService.quantityAProductAfterOrder[i],
            totalPrice: this.cartService.totalPriceAProductAfterOrder[i]
          }

          this.orderService.saveCartDetai(cartDetail).subscribe((data) =>{
            console.log("cartDetaillll " + i + "--" + data);
          })
        }
      })


    // gọi API lưu order
    let order = {
      id: 0,
      createAt: null,
      orderStatus: {
        id:1,
        nameOrderStatus:"Wait to confirm"
      },
      priceTotal: this.totalPayment,
      customer: this.customer,
      seller: this.cartService.productListToCart[0].seller
    }

    this.orderService.saveOrder(order).subscribe((data) =>{
      console.log("orderrrr --" + data.id + "--" + data.createAt);

      // gọi API lưu orderDetail
      for (let i = 0; i < this.cartService.productListToCart.length; i++) {
        let orderDetail = {
          id: i,
          product: this.cartService.productListToCart[i],
          order: data,
          quantity: this.cartService.quantityAProductAfterOrder[i],
          price: this.cartService.totalPriceAProductAfterOrder[i]
        }

        this.orderService.saveOrderDetail(orderDetail).subscribe((newData) =>{
          console.log("orderDetaillll " + i + "--" + newData);
        })
      }
    })
    this.router.navigate(["/user/thanks"]);
  }
}
