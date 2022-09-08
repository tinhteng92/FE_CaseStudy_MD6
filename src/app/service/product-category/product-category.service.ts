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
}
