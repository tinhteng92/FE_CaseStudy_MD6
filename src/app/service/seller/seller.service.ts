import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sale} from "../../model/Sale";
import { Page } from 'src/app/model/Page';
import {UserToken} from "../../model/UserToken";
import {Product} from "../../model/Product";
import {Seller} from "../../model/Seller";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  API = 'http://localhost:8080/sellers';
  info: any;
  constructor(private httpClient: HttpClient) { }

  // showListProducts(page: number,userName : any): Observable<any>{
  //   return this.httpClient.get<Page>(this.API+`/show/${page}`, userName);
  // }

  showListProducts(userName : string, page:number):Observable<any>{
    console.log("lít product service: ",userName)
    return this.httpClient.post<Page>(this.API+`/show/${page}`, userName)
  }

  createProduct(product: any, userId:any): Observable<any>{
    console.log("product",product)
    return this.httpClient.post<any>(this.API+`/save-product/`+userId,product);
  }

  getThisSeller(sellerId: number):Observable<any>{
    return this.httpClient.get<any>(this.API+`/${sellerId}`);
  }

  getProduct(idProduct: number):Observable<any>{
    return this.httpClient.get<any>(this.API+`/get-product/${idProduct}`);
  }


  deleteProduct(idProduct: number):Observable<any>{
    return this.httpClient.get<any>(this.API+`/delete-product/${idProduct}`);
  }

  editProduct(product: any,idProduct: number,idSeller:number ):Observable<any>{
    return  this.httpClient.post<any>(this.API+`/edit-product/`+idProduct+'/'+idSeller,product);
  }

  getSellerByUserToken(userName: string): Observable<any> {
    return this.httpClient.post(this.API + `/getSeller`, userName)
  }

  // Quản lý sale
  showListSale(userName: string): Observable<any> {
    return this.httpClient.post(this.API + `/sale/${userName}`, this.info);
  }

  saveSale(sale: Sale): Observable<Sale> {
    return this.httpClient.post<Sale>(this.API + '/save-sale', sale);
  }

  findSaleById(id: number): Observable<any>{
    return this.httpClient.get(this.API + `/sale/${id}`)
  }
  deleteSale(id: number):Observable<any> {
    return this.httpClient.get(this.API + `/delete-sale/${id}`)
  }

  // Quản lý Order

  showOrderList(idSeller: number): Observable<any>{
    return this.httpClient.get(this.API + `/orders/${idSeller}`)
  }

  showOrderConfirmedList(idSeller: number): Observable<any>{
    return this.httpClient.get(this.API + `/orders-confirmed/${idSeller}`)
  }

  showOrderDetail(idOrder: number): Observable<any> {
    return this.httpClient.get(this.API + `/order-detail/${idOrder}`)
  }

  confirmOrder(idOrder: number): Observable<any> {
    return this.httpClient.get(this.API + `/confirm-order/${idOrder}`)
  }

  editSeller(seller: any, idSeller: number):Observable<any>{
    return this.httpClient.post<any>(this.API+'/edit-seller'+idSeller, seller);
  }

  // sắp sếp orderConfirmed theo giá
  showOrderByPriceTotalUp(): Observable<any>{
    return this.httpClient.get(this.API + `/price-up`)
  }

  showOrderByPriceTotalDown(): Observable<any>{
    return this.httpClient.get(this.API + `/price-down`)
  }

  showOrderByDateUp(): Observable<any>{
    return this.httpClient.get(this.API + `/date-up`)
  }

  showOrderByDateDown(): Observable<any>{
    return this.httpClient.get(this.API + `/date-down`)
  }
}
