import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/order/order.service";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    //reset lại tất cả các biến, mảng của các service đã dùng để tạo cart, order
    for (let i = 0; i < this.cartService.productListToCart.length; i++) {
      this.cartService.productListToCart.pop();
      this.cartService.quantityAProductAfterOrder.pop();
      this.cartService.totalPriceAProductAfterOrder.pop();
    }

    this.cartService.totalCart = 0;
    this.cartService.indexOfDuplicateProduct = -1;

    //chưa biết cách reset lại cart
    // this.cartService.cart = ?;
    for (let i = 0; i < this.orderService.saleListToSeller.length; i++) {
      this.orderService.saleListToSeller.pop();
    }
  }

}
