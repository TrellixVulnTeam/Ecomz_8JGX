import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  rootURL = `https://62fb9cb8abd610251c0d7310.mockapi.io/api/v1/customer`;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return <Observable<Customer[]>>this.http.get(this.rootURL);
  }

  getCustomerById(CustomerId: number): Observable<Customer> {
    return <Observable<Customer>>this.http.get(`${this.rootURL}/${CustomerId}`);
  }

  addCustomer(CustomerData: Customer) {
    return this.http.post(this.rootURL, CustomerData);
  }

  editCustomer(CustomerId: number, CustomerData: Customer) {
    return this.http.put(`${this.rootURL}/${CustomerId}`, CustomerData);
  }

  deleteCustomer(CustomerId: number) {
    return this.http.delete(`${this.rootURL}/${CustomerId}`)
  }
}
