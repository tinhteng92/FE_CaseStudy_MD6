import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/Customer";
import {Seller} from "../../model/Seller";
import {ProductComment} from "../../model/ProductComment";
import {OrderDetail} from "../../model/OrderDetail";
import {Sale} from "../../model/Sale";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:8080/customers';

  constructor(private http:HttpClient) { }

  findCustomerByUserName(username: string): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/customers/findCustomerByUserName",username);
  }

  findSellerByProductId(id: number):Observable<Seller>{
    return this.http.post<Seller>("http://localhost:8080/customers/findSellerByProductId",id);
  }

  saveProductComment(productComment: ProductComment):Observable<ProductComment>{
    return this.http.post<ProductComment>("http://localhost:8080/customers/save-productComment",productComment);
  }

  findProductCommentListByProductId(idProduct: number):Observable<ProductComment[]>{
    return this.http.post<ProductComment[]>("http://localhost:8080/customers/findProductCommentListByProductId",idProduct);
  }

  changeIsRatedInOrderDetail(idOrderDetail: number):Observable<OrderDetail>{
    return this.http.post<OrderDetail>("http://localhost:8080/customers/changeIsRatedInOrderDetail",idOrderDetail);
  }

  showCustomerDetail(id: number): Observable<any>{
    return this.http.get<any>(this.API + `/customer/${id}`)
  }

  saveCustomer(customer: Customer): Observable<Sale> {
    return this.http.post<Customer>(this.API + '/edit-customer', customer);
  }

}
