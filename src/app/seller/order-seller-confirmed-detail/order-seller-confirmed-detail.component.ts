import { Component, OnInit } from '@angular/core';
import {OrderDetail} from "../../model/OrderDetail";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../../service/seller/seller.service";

@Component({
  selector: 'app-order-seller-confirmed-detail',
  templateUrl: './order-seller-confirmed-detail.component.html',
  styleUrls: ['./order-seller-confirmed-detail.component.css']
})
export class OrderSellerConfirmedDetailComponent implements OnInit {

  id: any;
  orderDetail: OrderDetail[] = [];
  // orderInOrderDetail: Order[] = [];
  constructor(private router: Router, private route: ActivatedRoute,private sellerService: SellerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.sellerService.showOrderDetail(this.id).subscribe((data) =>{
        this.orderDetail = data;
        // this.orderDetail.order = data.order;
        // console.log(this.orderDetail)
        // console.log(data.order)
        console.log(data)
      })
    })
  }
  cancel(){
    this.router.navigate(["/seller/order-seller"]);
  }

}
