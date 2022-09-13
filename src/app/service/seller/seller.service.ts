import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sale} from "../../model/Sale";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  API = 'http://localhost:8080/sellers';
  info: any;
  constructor(private httpClient: HttpClient) { }

  showListProducts(userName : any): Observable<any>{
    return this.httpClient.get<any>(this.API, userName);
  }

  showListSale(userName: string): Observable<any> {
    return this.httpClient.post(this.API + `/sale/${userName}`, this.info);
  }

  saveSale(sale: Sale): Observable<Sale> {
    return this.httpClient.post<Sale>(this.API + '/save-sale', sale);
  }
}
