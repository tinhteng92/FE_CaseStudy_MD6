import {Customer} from "./Customer";
import {Seller} from "./Seller";
import {OrderStatus} from "./OrderStatus";

export class Order {
  id: number;
  createAt: any;
  orderStatus: OrderStatus;
  priceTotal: number;
  customer: Customer;
  seller: Seller;
  
  constructor(id: number, createAt: any, orderStatus: OrderStatus, priceTotal: number, customer: Customer, seller: Seller) {
    this.id = id;
    this.createAt = createAt;
    this.orderStatus = orderStatus;
    this.priceTotal = priceTotal;
    this.customer = customer;
    this.seller = seller;
  }
}
