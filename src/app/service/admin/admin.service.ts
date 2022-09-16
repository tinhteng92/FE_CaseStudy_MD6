import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../model/Page";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API = 'http://localhost:8080/admin';
  info: any;
  nameSeller!: string

  constructor(private httpClient: HttpClient) { }

  //Quản lý seller

  showListRequestSeller(): Observable<any>{
    return this.httpClient.get(this.API+`/request`)
  }

  acceptSeller(id: number){
    return this.httpClient.post(this.API+`/accept/${id}`, this.info);
  }

  showActiveSeller(): Observable<any>{
    return this.httpClient.get(this.API+`/showSeller`)
  }

  deleteSeller(id: number) {
    return this.httpClient.get(this.API+`/delete/${id}`)
  }

  showDetailSeller(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API + `/seller/${id}`)
  }

  controlSeller(id: number):Observable<any> {
    return this.httpClient.post(this.API + `/controlSeller/${id}`, this.info)
  }

// Quản lý Customer
  showCustomerList(): Observable<any>{
    return this.httpClient.get(this.API + '/customer');
  }

  showCustomerDetail(id: number): Observable<any>{
    return this.httpClient.get<any>(this.API + `/customer/${id}`)
  }

  controlCustomer(id: number):Observable<any> {
    return this.httpClient.post(this.API + `/controlCustomer/${id}`, this.info)
  }

  searchCusByPhone(phone: string): Observable<any> {
    return this.httpClient.post(this.API + '/customer-phone', phone)
  }

}
