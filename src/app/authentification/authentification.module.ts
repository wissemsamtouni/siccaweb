import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';

import { LoginComponent } from './componentauth/login/login.component';
import { RegistrComponent } from './componentauth/registr/registr.component';
import { ForgetpasswordComponent } from './componentauth/forgetpassword/forgetpassword.component';
import { CodeconfirmationComponent } from './componentauth/codeconfirmation/codeconfirmation.component';
import { ChangermotdepasseComponent } from './componentauth/changermotdepasse/changermotdepasse.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    RegistrComponent,
    ForgetpasswordComponent,
    CodeconfirmationComponent,
    ChangermotdepasseComponent,

  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ReactiveFormsModule,



  ]
})
export class AuthentificationModule { }
