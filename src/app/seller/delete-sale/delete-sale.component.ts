import { Component, OnInit } from '@angular/core';
import {SellerService} from "../../service/seller/seller.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Sale} from "../../model/Sale";

@Component({
  selector: 'app-delete-sale',
  templateUrl: './delete-sale.component.html',
  styleUrls: ['./delete-sale.component.css']
})
export class DeleteSaleComponent implements OnInit {
  deleteForm!: FormGroup
  id!: any;
  sale!: Sale;
  constructor(private sellerService: SellerService,private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.sellerService.findSaleById(this.id).subscribe(data => {
        this.sale = data;
        console.log("sale" + data)
      })

    });
  }

  ngOnInit(): void {
  }

  deleteSale(id: any) {
    this.sellerService.deleteSale(id).subscribe(() => {
      alert("Delete successful!")
      this.router.navigate(['/seller/sale-management']);
    }, e => console.log(e));
  }


}
