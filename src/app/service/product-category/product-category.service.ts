import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../model/Page";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  API = 'http://localhost:8080/home';
  info: any;

  constructor(private httpClient: HttpClient) { }

  showListProduct(page:number): Observable<any>{
    return this.httpClient.get<Page>(this.API +`/${page}`);
  }

  showDetailProduct(id: number): Observable<any>{
    return this.httpClient.get(this.API +`/product-detail/${id}`)
  }

  showSaleList(id: number): Observable<any>{
    return this.httpClient.get(this.API + `/sale/${id}`)
  }

  showProductImageList(id: number): Observable<any>{
    return this.httpClient.get(this.API + `/product-img/${id}`)
  }

  showProductBySold(): Observable<any>{
    return this.httpClient.get(this.API + `/top-sold`)
  }

  showProductByPriceDown(): Observable<any>{
    return this.httpClient.get(this.API + `/price-down`)
  }

  showProductByPriceUp(): Observable<any>{
    return this.httpClient.get(this.API + `/price-up`)
  }

  showProductByCategory(id: number): Observable<any> {
    return this.httpClient.get(this.API + `/category/${id}`)
  }

  showCategories(): Observable<any> {
    return this.httpClient.get(this.API + `/category`)
  }

  APIS = 'http://localhost:8080/sellers';
  getCategory():Observable<any>{
    return this.httpClient.get(this.APIS+`/get-category`)
  }
}
