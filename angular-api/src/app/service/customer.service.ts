import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}


  getCustomers(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>('http://localhost:8081/api/customers/')
  }

  getCustomerById(id: number): Observable<any>{
    return this.http.get<ApiResponse>('http://localhost:8081/api/customers/' + id )
  }

  createCustomer(customer: Customer) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8081/api/customers/', customer)
  }

  updateCustomer(id:number, customer: Customer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>('http://localhost:8081/api/customers/' + customer.id , customer);
  }

  deleteCustomer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>('http://localhost:8081/api/customers/' + id)
  }

}
