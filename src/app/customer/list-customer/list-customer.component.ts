import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../../models/Customer";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer! : Observable<Array<Customer>>;
  errorMessage! :String;
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.handleSearchCustomers()
  }
  handleSearchCustomers() {
    this.customer=this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })

    );
  }

  handleDeleteCustomer(c: Customer) {

  }

  handleUpdateCustomer(c: Customer) {

    this.router.navigateByUrl("/updateCustomer",{state:c})

  }
}
