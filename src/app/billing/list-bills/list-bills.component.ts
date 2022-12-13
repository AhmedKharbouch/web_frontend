import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../../models/Customer";
import {Bill} from "../../models/Bill";
import {BillingService} from "../../service/billing.service";

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})
export class ListBillsComponent implements OnInit {
  bills! : Observable<Array<Bill>>;
  errorMessage! :String;
  constructor(private billingService:BillingService) { }

  ngOnInit(): void {
  }

  handleSearchBills() {
    this.bills=this.billingService.getBills().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })

    );
  }

  handleDeleteBill(c: any) {
    
  }

  handleUpdateBill(c: any) {
    
  }
}
