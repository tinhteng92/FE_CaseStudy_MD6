import {Cart} from "./Cart";
import {Product} from "./Product";
import {Seller} from "./Seller";

export class CartDetail{
  id: number;
  cart: Cart;
  product: Product;
  seller: Seller;
  quantity: number;
  totalPrice: number;


  constructor(id: number, cart: Cart, product: Product, seller: Seller, quantity: number, totalPrice: number) {
    this.id = id;
    this.cart = cart;
    this.product = product;
    this.seller = seller;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
