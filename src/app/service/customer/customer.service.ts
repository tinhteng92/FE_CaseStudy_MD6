import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  findCustomerByUserName(username: string): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/customers/findCustomerByUserName",username);
  }
}
