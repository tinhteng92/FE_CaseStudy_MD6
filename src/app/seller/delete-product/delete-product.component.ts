import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../../service/seller/seller.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  id: any;
  product!: Product;

  constructor(private route: ActivatedRoute, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.sellerService.getProduct(this.id).subscribe((data) => {
        this.product = data;
        console.log(data);
      })
    })
  }

  deleteProduct(idProduct: number){
    this.sellerService.deleteProduct(idProduct).subscribe((data) => {
      this.router.navigate(["/seller"]);
      alert("Complete Delete Product");
    })
  }
   cancelDelete(){
     this.router.navigate(["/seller"]);
   }
}
