import {Product} from "./Product";
import {Customer} from "./Customer";

export class ProductComment{
  id: number;
  creatAt: any;
  message: string;
  rating: number;
  product: Product;
  customer: Customer;


  constructor(id: number, creatAt: any, message: string, rating: number, product: Product, customer: Customer) {
    this.id = id;
    this.creatAt = creatAt;
    this.message = message;
    this.rating = rating;
    this.product = product;
    this.customer = customer;
  }
}
