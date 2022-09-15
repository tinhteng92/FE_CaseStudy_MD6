import { Component, OnInit } from '@angular/core';
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {Sale} from "../../model/Sale";
import {ScriptService} from "../../script.service";

@Component({
  selector: 'app-sale-management',
  templateUrl: './sale-management.component.html',
  styleUrls: ['./sale-management.component.css']
})
export class SaleManagementComponent implements OnInit {
  p: any;
  saleList: Sale[] = [];
  constructor(private script: ScriptService, private sellerService: SellerService, public loginService : LoginService) {
    this.script.load('bundle', 'owl-carousel', 'min', 'select2','custom', 'loader').then(data => {
    }).catch(error => console.log(error));
    this.sellerService.showListSale(this.loginService.getUserToken().username).subscribe(data => {
      console.log(this.loginService.getUserToken().username);
      this.saleList = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


}
