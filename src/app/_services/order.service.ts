import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Order } from '../_model/order';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  foodOrder(order: any){
    return this.http.post<any>(Config.orderurl, order);
  }

  getOrder(){
  }
  
}
