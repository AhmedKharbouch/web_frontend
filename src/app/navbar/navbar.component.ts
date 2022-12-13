import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from "../service_sec/keycloak-security.service";
import {Customer} from "../models/Customer";
import {KeycloakProfile, KeycloakPromise} from "keycloak-js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails?:KeycloakProfile
  username?:String
  constructor(public securityService:KeycloakSecurityService) { }

  ngOnInit(): void {
    console.log(this.securityService.kc?.token)


   this.securityService.kc?.loadUserProfile().success((data)=>{
     this.username = data.username;
   });

   this.username = this.securityService.kc?.profile?.username
  }


  onLogout() {
    this.securityService.kc?.logout();
  }



  onLogin() {
    this.securityService.kc?.login();
  }

  onChangePassword() {
    this.securityService.kc?.accountManagement()
  }

  isAppManager() {
    return this.securityService.kc?.hasRealmRole("MANAGER")
  }
  isAppUser() {
    return this.securityService.kc?.hasRealmRole("USER")
  }
  isAppAdmin() {
    return this.securityService.kc?.hasRealmRole("ADMIN")
  }
}
