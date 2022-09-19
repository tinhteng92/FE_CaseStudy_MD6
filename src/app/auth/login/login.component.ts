import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs";
import {Seller} from "../../model/Seller";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  seller!: Seller;
  customer!: Customer;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {


  }

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  })

  login(){
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((data)=>{
        if (data != null) {
          this.loginService.setUserToken(data);
          this.loginService.setToken(data.token);
          this.loginService.check = true;

          if (data.roles[0].name == "ROLE_SELLER") {
            this.loginService.getSellerByUserToken(this.loginService.getUserToken().username).subscribe(data => {
              this.seller = data;
              console.log("seller" + data)
              if(this.seller.isActive == true){
                this.router.navigate(["/seller"]);
              }else {
                alert("Your account has been locked due to a violation of the rules, please contact the administrator!")
                this.router.navigate(["/login"]);

              }
            })


          } else if (data.roles[0].name == "ROLE_ADMIN") {
            this.router.navigate(["/admin"]);
          } else {
            this.loginService.getCustomerByUserToken(this.loginService.getUserToken().username).subscribe(data => {
              this.customer = data;
              console.log("customer" + data)
              if(this.customer.isActive == true){
                this.loginService.checkUser = true;
                this.router.navigate(["/"]);
              }else {
                alert("Your account has been locked due to a violation of the rules, please contact the administrator!")
                this.router.navigate(["/login"]);

              }
            })


          }

        } else {
          alert("Email or password is wrong, please re-enter! \n"
          + "Or The account has not been confirmed, please wait for the mail");
          this.router.navigate(["/login"]);
        }

      })
    } else {
      alert("Please checkout form!");
      this.router.navigate(["/login"]);
    }

  }

}
