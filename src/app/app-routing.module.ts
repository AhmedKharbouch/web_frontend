import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./product/add-product/add-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {ListBillsComponent} from "./billing/list-bills/list-bills.component";

const routes: Routes = [
  { path:"addProduct",component:AddProductComponent},
  { path:"updateProduct",component:UpdateProductComponent},
  { path:"listProduct",component:ListProductComponent},
  { path:"addCustomer",component:AddCustomerComponent},
  { path:"updateCustomer",component:UpdateCustomerComponent},
  { path:"listCustomer",component:ListProductComponent},
  { path:"listBills",component:ListBillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
