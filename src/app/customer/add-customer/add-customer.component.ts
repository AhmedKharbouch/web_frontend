import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../models/Customer";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  newCustomerForGroup!: FormGroup;
  constructor(private customerService:CustomerService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.newCustomerForGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.required,Validators.email]),
    });
  }


  handleSaveCustomer() {
    let customer:Customer = this.newCustomerForGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next:data=>{
        alert("Categorie named "+customer.name+" saved successfully");
        this.newCustomerForGroup.reset()
        //this.router.navigateByUrl("/produits");
      },error: err => {
        console.log(err);
      }
    });
  }
}
