import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {environment} from "../../environments/environment";
import {KeycloakSecurityService} from "../service_sec/keycloak-security.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private securityService:KeycloakSecurityService) { }

  public getProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHostProduct+"/products",)
  }

  public saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(environment.backendHostProduct+"/products/addProduct",product);
  }

  public UpdateProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(environment.backendHostProduct+"/products/updateProduct", product);
  }
}
