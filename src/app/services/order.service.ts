import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  postOrder(text: String):Observable<String>{
    return this.http.post<String>(`${this.baseUrl}/add/order?text=`+text,text);

  }
}
