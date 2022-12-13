import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Customer} from "../models/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHostCustomer+"/customers")
  }
  public saveCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHostCustomer+"/customers/addCustomer",customer);
  }

  public UpdateCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHostCustomer+"/customers/updateCustomer", customer);
  }


}
