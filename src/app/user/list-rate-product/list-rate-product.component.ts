import { Component, OnInit } from '@angular/core';
import {Sale} from "../../model/Sale";
import {ScriptService} from "../../script.service";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {Order} from "../../model/Order";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {OrderService} from "../../service/order/order.service";
import {OrderDetail} from "../../model/OrderDetail";

@Component({
  selector: 'app-list-rate-product',
  templateUrl: './list-rate-product.component.html',
  styleUrls: ['./list-rate-product.component.css']
})
export class ListRateProductComponent implements OnInit {

  p: any;
  orderDetail: OrderDetail[] = [];
  idOrder!: number;
  checkRate: boolean = false;

  constructor(private script: ScriptService, private sellerService: SellerService, public loginService : LoginService,
              private activatedRoute: ActivatedRoute,private orderService: OrderService) {
    this.script.load('bundle', 'owl-carousel', 'min', 'select2','custom', 'loader').then(data => {
    }).catch(error => console.log(error));

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.idOrder = Number(paramMap.get('id'));

        this.orderService.findOrderDetailsByOrderId(this.idOrder).subscribe(data =>{
          this.orderDetail = data;
          console.log(this.orderDetail)

          let change = false;
          for (let i = 0; i < this.orderDetail.length; i++) {
            change = Boolean(this.orderDetail[i].isRated);
            this.orderDetail[i].isRated = change;
          }
        })
    });
  }

  allowComment(idProduct: number, idOrderDetail: number) {
    localStorage.setItem("allowComment" + idProduct, "true");
    localStorage.setItem("idOrderDetail", String(idOrderDetail));
  }

}

