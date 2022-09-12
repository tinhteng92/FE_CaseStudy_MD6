import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";
import {Cart} from "../../model/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productListToCart: Product[] = [];
  totalCart: number = 0;
  indexOfDuplicateProduct: number = -1;
  quantityAProductAfterOrder: number[] = [];
  totalPriceAProductAfterOrder: number[] = [];
  cart!: Cart;
  constructor() { }

}
