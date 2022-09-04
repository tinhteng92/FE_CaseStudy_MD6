import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  check: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerCustomerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
    avatar: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    appUser: new FormGroup({
      username: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(50)]),
      password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      roles: new FormArray([new FormGroup({
        id: new FormControl("3")
      })])
    })
  })

  registerCustomer() {
    if (this.registerCustomerForm.valid) {
      this.loginService.checkUserName(this.registerCustomerForm.value.appUser?.username).subscribe((data) => {
        console.log("data-username" + data);
        if (data) {
          this.loginService.registerCustomer(this.registerCustomerForm.value).subscribe((data) => {
            console.log("data");
            console.log(data);
            this.router.navigate(["/login"]);
          })
        } else {
          this.check = true;
          this.router.navigate(["/register-customer"]);
        }
      })

    } else {
      alert("Please checkout form!");
      this.router.navigate(["/register-customer"]);
    }

  }

}
