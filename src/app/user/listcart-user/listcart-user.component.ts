import { Component, OnInit } from '@angular/core';
import {ScriptService} from "../../script.service";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {Order} from "../../model/Order";
import {OrderService} from "../../service/order/order.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-listcart-user',
  templateUrl: './listcart-user.component.html',
  styleUrls: ['./listcart-user.component.css']
})
export class ListcartUserComponent implements OnInit {

  p: any;
  orderList: Order[] = [];
  idCustomer!: number;

  constructor(private script: ScriptService, private sellerService: SellerService, public loginService : LoginService,
              private activatedRoute: ActivatedRoute,private orderService: OrderService) {
    this.script.load('bundle', 'owl-carousel', 'min', 'select2','custom', 'loader').then(data => {
    }).catch(error => console.log(error));

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.idCustomer = Number(paramMap.get('id'));

      this.orderService.findOrdersByCustomerId(this.idCustomer).subscribe(data => {
        this.orderList = data;
      })

    });

  }
}
