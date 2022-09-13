import {Product} from "./Product";
import {Order} from "./Order";

export class OrderDetail {
  id: number;
  product: Product;
  order: Order;
  quantity: number;
  price: number;


  constructor(id: number, product: Product, order: Order, quantity: number, price: number) {
    this.id = id;
    this.product = product;
    this.order = order;
    this.quantity = quantity;
    this.price = price;
  }
}
