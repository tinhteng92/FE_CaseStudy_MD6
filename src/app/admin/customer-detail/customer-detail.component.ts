import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  id: any;
  customer!: Customer;

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.adminService.showCustomerDetail(this.id).subscribe(data => {
        this.customer = data;
        console.log("detail Customer" + this.customer.appUser.username)
      });
    })
  }

}
