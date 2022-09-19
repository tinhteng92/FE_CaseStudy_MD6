import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {Seller} from "../../model/Seller";

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  sale: any;
  seller!: Seller;
  creatForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl("", Validators.required),
    priceDiscount: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    startAt: new FormControl("",Validators.required),
    endAt: new FormControl("", Validators.required)
  })

  constructor(private sellerService: SellerService, private router: Router, public loginService : LoginService) { }

  ngOnInit(): void {

  }

  submit(){
    this.sellerService.getSellerByUserToken(this.loginService.getUserToken().username).subscribe(data => {
      this.seller = data;
    });
    this.sale = {
      name: this.creatForm.value.name,
      description: this.creatForm.value.description,
      priceDiscount: this.creatForm.value.priceDiscount,
      startAt: this.creatForm.value.startAt,
      endAt: this.creatForm.value.endAt,
      seller: {
        id: this.seller.id
      }
    }
    if(this.validateEndAt() && this.validateStartAt()){
      this.sellerService.saveSale(this.sale).subscribe((data) =>{
        console.log(data)
        alert("Add new successful!");
        this.router.navigate(['/seller/sale-management']);
        this.creatForm.reset();

      }, e => {
        alert("Add failed")
        console.log(e)
      });
    }else {
      alert("Please check your form!")
    }

  }

  validateStartAt(){
    let dateNow = new Date();
    let date = "'" + this.creatForm.value.startAt + "'";
    let startDate = new Date(date);
    console.log(startDate)
    console.log(dateNow)

    if(startDate > dateNow) {
      // @ts-ignore
      document.getElementById("startAt").style.display = "none";
      return true;
    }else {
      // @ts-ignore
      document.getElementById("startAt").style.display = "block";
      return false;
    }
  }

  validateEndAt(){
    let dateNow = new Date();
    let date1 = "'" + this.creatForm.value.startAt + "'";
    let date2 = "'" + this.creatForm.value.endAt + "'";

    let startDate = new Date(date1);
    let endDate = new Date(date2);
    if(endDate > dateNow && endDate > startDate) {
      // @ts-ignore
      document.getElementById("endAt").style.display = "none";
      return true;
    }else {
      // @ts-ignore
      document.getElementById("endAt").style.display = "block";
      return false;
    }
  }
}
