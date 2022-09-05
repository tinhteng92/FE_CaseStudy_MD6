import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    let userToken = this.loginService.getUserToken();
    if (userToken != null) {
      this.check = true;
    }
  }

  logOut() {
    this.loginService.deleteUserToken();
    this.loginService.deleteToken();
    this.check = false;
  }
}
