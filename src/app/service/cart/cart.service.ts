import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productListToCart: Product[] = [];
  totalCart: number = 0;
  indexOfDuplicateProduct: number = -1;
  constructor() { }

}
