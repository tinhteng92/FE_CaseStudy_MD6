import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/Customer";
import {Seller} from "../../model/Seller";

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  p: any;
  customerList: Customer[] = [];
  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
   this.showCustomerList();
  }

  showCustomerList(){
    this.adminService.showCustomerList().subscribe(data => {
      this.customerList = data;
      console.log(data)
    })
  }

  // search(search: string) {
  //   this.adminService.showCustomerList().subscribe(customers => {
  //
  //     let searchCustomer: Customer[] = [];
  //     for (const cus of customers) {
  //       if (cus.name?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  //         .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  //           .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
  //         searchCustomer.push(cus)
  //       }
  //     }
  //     this.customerList = searchCustomer;
  //   })
  // }

  search(search: string) {
    this.adminService.showCustomerList().subscribe(customers => {

      let searchCustomer: Customer[] = [];
      for (const cus of customers) {
        if (cus.phoneNumber?.includes(search)) {
          searchCustomer.push(cus)
        }
      }
      this.customerList = searchCustomer;
    })
  }

  controlCustomer(id: number) {
    this.adminService.controlCustomer(id).subscribe(data => {
      this.showCustomerList();
    }, e => console.log(e));
  }

  inActiveCustomer(){
    this.adminService.filterInActiveCustomer().subscribe(data =>{
      this.customerList = data;
    }, e => console.log(e));
  }

  activeCustomer(){
    this.adminService.filterActiveCustomer().subscribe(data =>{
      this.customerList = data;
    }, e => console.log(e));
  }

}
