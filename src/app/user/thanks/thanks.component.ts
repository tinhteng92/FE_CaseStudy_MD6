import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/order/order.service";
import {Product} from "../../model/Product";
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../service/customer/customer.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  customer!: Customer;
  constructor(private customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.customerService.findCustomerByUserName(this.loginService.getUserToken().username).subscribe(data =>{
      this.customer = data;
    })
  }

}
