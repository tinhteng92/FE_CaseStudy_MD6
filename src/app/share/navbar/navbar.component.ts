import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {CartService} from "../../service/cart/cart.service";
import {CustomerService} from "../../service/customer/customer.service";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  quantity = document.getElementsByClassName("count-number-input");
  totalOneProductArray = document.getElementsByClassName("classTotalOneProduct");
  productListToCart: Product[] = [];
  newQuantity!: number;
  totalCart: number = 0;
  customer!: Customer;
  constructor(public loginService: LoginService, private router: Router, public cartService: CartService,
              private customerService: CustomerService) { }


  ngOnInit(): void {
    if (this.cartService.indexOfDuplicateProduct == -1) {
      this.productListToCart = this.cartService.productListToCart;
      this.newQuantity = 0;
    }
  }

  logOut() {
    localStorage.clear();
    this.cartService.productListToCart = [];
    this.productListToCart = this.cartService.productListToCart;
    this.cartService.totalCart = 0;
    this.loginService.check = false;
    this.loginService.checkUser = false;
    this.router.navigate(["/"]);
  }

  increase(index: number) {
    this.newQuantity = Number(this.quantity[index].innerHTML) + 1;

    this.quantity[index].innerHTML = String(this.newQuantity);

    this.totalOneProductArray[index].innerHTML = String(this.productListToCart[index].price * Number(this.quantity[index].innerHTML));
    this.totalPriceCartPlus();
  }

  decrease(index: number) {
    if (Number(this.quantity[index].innerHTML) > 1) {
      this.newQuantity = Number(this.quantity[index].innerHTML) - 1;
      this.quantity[index].innerHTML = String(this.newQuantity);
      this.totalOneProductArray[index].innerHTML = String(this.productListToCart[index].price * Number(this.quantity[index].innerHTML));
      this.totalPriceCartMinus(index);
    }
  }

  totalPriceCartPlus() {
    let totalCart = 0;
    for (let i = 0; i < this.totalOneProductArray.length; i++) {
      totalCart += Number(this.totalOneProductArray[i].innerHTML);
    }
    this.cartService.totalCart = totalCart;
  }

  totalPriceCartMinus(index: number) {
    this.cartService.totalCart -= +this.productListToCart[index].price;
  }

  deleteOneProduct(index : number) {
    let totalOneProduct = this.totalOneProductArray[index].innerHTML;
    this.cartService.productListToCart.splice(index,1);
    this.productListToCart = this.cartService.productListToCart;
    this.cartService.totalCart -= +totalOneProduct;
  }

  orderClosing() {
    for (let i = 0; i < this.cartService.productListToCart.length; i++) {
      this.cartService.quantityAProductAfterOrder[i] = +this.quantity[i].innerHTML;
      this.cartService.totalPriceAProductAfterOrder[i] = +this.totalOneProductArray[i].innerHTML;
    }
  }

  showHomeUser() {
    this.customerService.findCustomerByUserName(this.loginService.getUserToken().username).subscribe(data =>{
      this.customer = data;
      this.router.navigate(["/user/listCartUser/" +  this.customer.id]);
    })
  }
}
