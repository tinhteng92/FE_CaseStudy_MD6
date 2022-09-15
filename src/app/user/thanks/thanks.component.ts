import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/order/order.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
  }

}
