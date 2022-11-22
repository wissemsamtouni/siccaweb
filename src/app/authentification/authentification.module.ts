import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';

import { LoginComponent } from './componentauth/login/login.component';
import { RegistrComponent } from './componentauth/registr/registr.component';
import { ForgetpasswordComponent } from './componentauth/forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    RegistrComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
