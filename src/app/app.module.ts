import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {KeycloakSecurityService} from "./service_sec/keycloak-security.service";
import {KeycloakService} from "keycloak-angular";
import { ListBillsComponent } from './billing/list-bills/list-bills.component';

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return()=>kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    UpdateProductComponent,
    UpdateCustomerComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    ListProductComponent,
    ListBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //ici on ajoute le module http client
    ReactiveFormsModule
  ],
  providers: [
    //pour demarer kaycloak en premier
    {
      provide:APP_INITIALIZER,
      deps:[KeycloakSecurityService],
      useFactory:kcFactory,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
