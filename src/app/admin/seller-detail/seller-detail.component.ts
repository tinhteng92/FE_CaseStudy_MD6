import { Component, OnInit } from '@angular/core';
import {Seller} from "../../model/Seller";
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {
  seller!: Seller;
  id: any;

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.adminService.showDetailSeller(this.id).subscribe(data => {
        this.seller = data;
        console.log(data)
      });


    })
  }


}
