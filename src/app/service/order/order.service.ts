import { Injectable } from '@angular/core';
import {Sale} from "../../model/Sale";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/Customer";
import {Cart} from "../../model/Cart";
import {CartDetail} from "../../model/CartDetail";
import {Order} from "../../model/Order";
import {Seller} from "../../model/Seller";
import {OrderDetail} from "../../model/OrderDetail";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  saleListToSeller: Sale[] =[];
  constructor(private http:HttpClient) { }

  saveCart(customer: Customer): Observable<Cart>{
    return this.http.post<Cart>("http://localhost:8080/customers/orders/save-cart",customer);
  }

  saveCartDetai(cartDetail: CartDetail): Observable<CartDetail>{
    return this.http.post<CartDetail>("http://localhost:8080/customers/orders/save-cartDetail",cartDetail);
  }

  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>("http://localhost:8080/customers/orders/save-order",order);
  }

  saveOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail>{
    return this.http.post<OrderDetail>("http://localhost:8080/customers/orders/save-orderDetail",orderDetail);
  }
}
