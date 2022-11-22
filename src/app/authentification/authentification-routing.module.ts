import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';
import {BackofficeComponent} from "../backoffice/backoffice.component";
import {DashboardComponent} from "../backoffice/componentback/dashboard/dashboard.component";
import {FormulaireComponent} from "../backoffice/componentback/formulaire/formulaire.component";
import {LoginComponent} from "./componentauth/login/login.component";
import {RegistrComponent} from "./componentauth/registr/registr.component";
import {ForgetpasswordComponent} from "./componentauth/forgetpassword/forgetpassword.component";

const routes: Routes = [
  {path:'',component :AuthentificationComponent,children:[
      { path: 'login', component: LoginComponent },
      {path:'registr',component:RegistrComponent},
      {path:'forgetpassword',component:ForgetpasswordComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
