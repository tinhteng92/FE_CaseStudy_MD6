import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/Order";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-order-seller-confirmed',
  templateUrl: './order-seller-confirmed.component.html',
  styleUrls: ['./order-seller-confirmed.component.css']
})
export class OrderSellerConfirmedComponent implements OnInit {

  p: any;
  orderList: Order[] = []
  constructor(private sellerService: SellerService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.showOrderListConfirmed()
  }
  showOrderListConfirmed(){
    this.sellerService.showOrderConfirmedList(this.loginService.getUserToken().id).subscribe((data) => {
      this.orderList = data;
      console.log(this.orderList)
    })
  }

}
