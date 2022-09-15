import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {OrderService} from "../../service/order/order.service";
import {Order} from "../../model/Order";
import {CustomerService} from "../../service/customer/customer.service";
import {OrderDetail} from "../../model/OrderDetail";

@Component({
  selector: 'app-order-detail-user',
  templateUrl: './order-detail-user.component.html',
  styleUrls: ['./order-detail-user.component.css']
})
export class OrderDetailUserComponent implements OnInit {
  idOrder!: number;
  order!: Order;
  orderDetail: OrderDetail[] = [];
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.idOrder = Number(paramMap.get('id'));

      this.orderService.findOrderById(this.idOrder).subscribe(data =>{
        this.order = data;

        this.orderService.findOrderDetailsByOrderId(this.order.id).subscribe(data =>{
          this.orderDetail = data;
        })
      });

    });

  }

}
