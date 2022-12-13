import {Observable} from "rxjs";
import {Product} from "./Product";
import {Customer} from "./Customer";


export interface Bill {
  id:   number;
  billingDate:    Date;
  productItems:    Observable<Array<Product>>;
  customer:Customer;
  customerID:number;

}
/*
   private Long id;
    private String name;
    private String email;*/
