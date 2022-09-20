import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../../service/seller/seller.service";
import Swal from 'sweetalert2';

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
      let timerInterval: string | number | NodeJS.Timer | undefined
      Swal.fire({
        title: 'The product is being deleted!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          // @ts-ignore
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            // @ts-ignore
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          window.location.reload();
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      // this.router.navigate(["/seller"]);
    })
  }
   cancel(){
     this.router.navigate(["/seller"]);
   }
}
