import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import {SidbarComponent} from "./sidbar/sidbar.component";
import {FormulaireComponent} from "./componentback/formulaire/formulaire.component";
import {DashboardComponent} from "./componentback/dashboard/dashboard.component";

import {TableusersComponent} from "./componentback/tableusers/tableusers.component";
import {ChatComponent} from "./componentback/chat/chat.component";
import { FormeventComponent } from './componentback/formevent/formevent.component';
import { MaterielComponent } from './componentback/materiel/materiel.component';




const routes: Routes = [
  {path:'',component :BackofficeComponent,children:[
      { path: 'dash', component: DashboardComponent },
      {path:'basic',component:FormulaireComponent},
      {path:'materiel',component:MaterielComponent},
      {path:'tableusers',component:TableusersComponent},
      {path:'formevent', component:FormeventComponent},


    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
