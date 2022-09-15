import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/Order";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-order-seller',
  templateUrl: './order-seller.component.html',
  styleUrls: ['./order-seller.component.css']
})
export class OrderSellerComponent implements OnInit {

  p: any;
  orderList: Order[] = []
  constructor(private sellerService: SellerService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.sellerService.showOrderList(this.loginService.getUserToken().id).subscribe((data) => {
      this.orderList = data;
      console.log(this.orderList)
    })
  }

}
