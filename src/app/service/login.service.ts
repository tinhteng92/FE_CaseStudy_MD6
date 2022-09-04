import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserToken} from "../model/UserToken";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user: any): Observable<UserToken>{
    return this.http.post<UserToken>("http://localhost:8080/login",user);
  }
  registerSeller( seller:any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/registerSeller",seller);
  }

  registerCustomer( customer:any): Observable<any>{
    console.log("customer",customer);

    return this.http.post<any>("http://localhost:8080/registerCustomer",customer);
  }

  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }
  setUserToken(userToken: UserToken){
    localStorage.setItem("userToken",JSON.stringify(userToken));
  }

  getUserToken(): UserToken{
    return JSON.parse(<string>localStorage.getItem("userToken"));
  }

  deleteUserToken() {
    localStorage.removeItem("userToken");
  }

  checkUserName( userName:any): Observable<any>{
    console.log("userName",userName);

    return this.http.post<any>("http://localhost:8080/checkUserName",userName);
  }
}
