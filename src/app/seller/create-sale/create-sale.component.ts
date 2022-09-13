import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {SellerService} from "../../service/seller/seller.service";

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  creatForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl("", Validators.required),
    priceDown: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    startAt: new FormControl(),
    endAt: new FormControl()
  })

  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const sale = this.creatForm.value;
    this.sellerService.saveSale(sale).subscribe(() =>{
      alert("Add new successful!");
      this.router.navigate(['/seller/sale-management']);
      this.creatForm.reset();

    }, e => console.log(e));
  }


}
