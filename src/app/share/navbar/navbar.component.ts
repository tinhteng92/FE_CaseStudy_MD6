import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  quantity = document.getElementsByClassName("count-number-input");
  totalOneProductArray = document.getElementsByClassName("classTotalOneProduct");
  priceProduct!: number[];
  newQuantity!: number;
  totalCart: number = 0;
  constructor(public loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
    this.newQuantity = 0;
    this.priceProduct = [10,5];
    for (let i = 0; i < this.totalOneProductArray.length; i++) {
      this.totalOneProductArray[i].innerHTML = String(this.priceProduct[i] * +this.quantity[i].innerHTML);
      this.totalCart += +this.totalOneProductArray[i].innerHTML;
    }
  }

  logOut() {
    this.loginService.deleteUserToken();
    this.loginService.deleteToken();
    this.loginService.check = false;
    this.router.navigate(["/"]);
  }

  increase(index: number) {
    this.newQuantity = Number(this.quantity[index].innerHTML) + 1;

    this.quantity[index].innerHTML = String(this.newQuantity);

    this.totalOneProductArray[index].innerHTML = String(this.priceProduct[index] * Number(this.quantity[index].innerHTML));
    this.totalPriceCartPlus();
  }

  decrease(index: number) {
    if (Number(this.quantity[index].innerHTML) > 1) {
      this.newQuantity = Number(this.quantity[index].innerHTML) - 1;
      this.quantity[index].innerHTML = String(this.newQuantity);
      this.totalOneProductArray[index].innerHTML = String(this.priceProduct[index] * Number(this.quantity[index].innerHTML));
      this.totalPriceCartMinus(index);
    }


  }

  totalPriceCartPlus() {
    let totalCart = 0;
    for (let i = 0; i < this.totalOneProductArray.length; i++) {
      totalCart += Number(this.totalOneProductArray[i].innerHTML);
    }
    this.totalCart = totalCart;
  }

  totalPriceCartMinus(index: number) {
    this.totalCart -= +this.priceProduct[index];
  }

  deleteOneProduct(index : number) {
    // duyet mang product
  }
}
