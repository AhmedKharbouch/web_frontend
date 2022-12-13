import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../models/Customer";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Bill} from "../models/Bill";

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private  http:HttpClient) { }

  public getBills():Observable<Array<Bill>>{
    return this.http.get<Array<Bill>>(environment.backendHostBilling+"/bills")
  }
}
