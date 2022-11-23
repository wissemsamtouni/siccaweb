import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import {SidbarComponent} from "./sidbar/sidbar.component";
import {FormulaireComponent} from "./componentback/formulaire/formulaire.component";
import {DashboardComponent} from "./componentback/dashboard/dashboard.component";

import {TableusersComponent} from "./componentback/tableusers/tableusers.component";
import {ChatComponent} from "./componentback/chat/chat.component";
import {FormpromoComponent} from "./componentback/formpromo/formpromo.component";




const routes: Routes = [
  {path:'',component :BackofficeComponent,children:[
      { path: 'dash', component: DashboardComponent },
      {path:'basic',component:FormulaireComponent},

      {path:'tableusers',component:TableusersComponent},
      {path:'promo',component:FormpromoComponent},



    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
