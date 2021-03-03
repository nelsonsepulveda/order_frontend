import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(page = 1, per_page = 10, search_str = "") {
    return this.http.get(`/api/orders?page=${page}&per_page=${per_page}&search_str=${search_str}`).toPromise()
  }

  updateOrder(id, status) {
    return this.http.put(`/api/update/${id}/${status}`,{status: status}).toPromise();
  }
}
