import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer/customer.service";
import {LoginService} from "../../service/login/login.service";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  customer!: Customer;
  constructor(private customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.customerService.findCustomerByUserName(this.loginService.getUserToken().username).subscribe(data =>{
      this.customer = data;
    })
  }

}
