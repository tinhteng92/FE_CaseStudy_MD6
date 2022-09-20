import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {CustomerService} from "../../service/customer/customer.service";
import {Customer} from "../../model/Customer";
import {AppUser} from "../../model/AppUser";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  editForm!: FormGroup;
  id!: any;
  customer!: Customer;
  obj: any;
  appUser!: AppUser;
  newPassword1!: any;
  constructor( private router: Router, public loginService : LoginService, private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCustomer(this.id);
    })
  }

  getCustomer(id: number) {
    return this.customerService.showCustomerDetail(id).subscribe(customer => {
      this.customer = customer;
      console.log("customer" + customer);
      console.log(customer.appUser.password)
      this.editForm = new FormGroup<any>({
        id: new FormControl(this.id),
        name: new FormControl(customer.name, Validators.required),
        phoneNumber: new FormControl(customer.phoneNumber, Validators.required),
        address: new FormControl(customer.address, Validators.required),
        isActive: new FormControl(customer.isActive),
        appUser: new FormGroup({
          id:  new FormControl(customer.appUser.id),
          username:  new FormControl(customer.appUser.username),
          password:  new FormControl(customer.appUser.password),
          roles: new FormArray([new FormGroup({
            id: new FormControl("3")
          })])
        })

      })
    })
  }

  updateCustomer(){

    this.customerService.saveCustomer(this.editForm.value).subscribe(() =>{
      alert("Update successful!")
      this.router.navigate(["/user/detail-user',customer.id"]);
    });
  }

  // validatePassword(){
  //   let oldPassword = this.customer.appUser.password;
  //   newPassword1 = document.getElementById("confirmpass1").value;
  //   if(oldPassword == newPassword) {
  //     // @ts-ignore
  //     document.getElementById("confirmpass").style.display = "none";
  //     return true;
  //   }else {
  //     // @ts-ignore
  //     document.getElementById("confirmpass").style.display = "block";
  //     return false;
  //   }
  // }

}
