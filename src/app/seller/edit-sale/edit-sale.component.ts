import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SellerService} from "../../service/seller/seller.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {Sale} from "../../model/Sale";
import {Seller} from "../../model/Seller";

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {
  editForm!: FormGroup;
  id!: any;
  sale!: Sale;
  obj: any;


  constructor(private sellerService: SellerService, private router: Router, public loginService : LoginService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getSale(this.id);
    });
  }

  ngOnInit(): void {
  }

  getSale(id: number) {
    return this.sellerService.findSaleById(id).subscribe(sale => {
     this.sale = sale;
      this.editForm = new FormGroup<any>({
        id: new FormControl(this.id),
        name: new FormControl(sale.name, Validators.required),
        priceDiscount: new FormControl(sale.priceDiscount, Validators.required),
        description: new FormControl(sale.description, Validators.required),
        startAt: new FormControl(sale.startAt),
        endAt: new FormControl(sale.endAt),

      })
    })
  }

  updateSale(id: number){
    this.obj = {
      id: this.editForm.value.id,
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      priceDiscount: this.editForm.value.priceDiscount,
      startAt: this.editForm.value.startAt,
      endAt: this.editForm.value.endAt,
      seller: {
        id: this.sale.seller?.id
      }
    }
    console.log(this.obj);
    this.sellerService.saveSale(this.obj).subscribe(() =>{
      alert("Update successful!")
      this.router.navigate(["/seller/sale-management"]);
    });
  }
}
