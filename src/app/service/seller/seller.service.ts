import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  API = 'http://localhost:8080/sellers';
  info: any;
  constructor(private httpClient: HttpClient) { }

  showListProducts(page: number,userName : any): Observable<any>{
    return this.httpClient.get<any>(this.API+`/show/${page}`, userName);
  }

}
