import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  sale: any;
  creatForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl("", Validators.required),
    priceDown: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    startAt: new FormControl(),
    endAt: new FormControl()
  })

  constructor(private sellerService: SellerService, private router: Router, public loginService : LoginService) { }

  ngOnInit(): void {
  }

  submit(){
    this.sale = {
      name: this.creatForm.value.name,
      description: this.creatForm.value.description,
      priceDown: this.creatForm.value.priceDown,
      startAt: this.creatForm.value.startAt,
      endAt: this.creatForm.value.endAt,
      seller: {
        id: this.loginService.getUserToken().id
      }
    }
    this.sellerService.saveSale(this.sale).subscribe((data) =>{
      console.log(data)
      alert("Add new successful!");
      this.router.navigate(['/seller/sale-management']);
      this.creatForm.reset();

    }, e => {
      alert("thêm ko thành công")
      console.log(e)
    });
  }


}
