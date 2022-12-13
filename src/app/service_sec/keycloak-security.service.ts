import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeycloakInstance} from "keycloak-js";

declare var Keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance | undefined  ;
  constructor(private http:HttpClient) { }

  async init(){
    console.log("security initialisation........")
    this.kc=new Keycloak({
      url:"http://localhost:8080",
      realm:"my-ecom-realm",
      clientId:"AngularProductsApp",
    });
    await this.kc?.init({
      onLoad:"check-sso",
    });



  }



}
