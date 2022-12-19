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
import { FormbonplanComponent } from './componentback/formbonplan/formbonplan.component';
import { ListebonplanComponent } from './componentback/listebonplan/listebonplan.component';
import { CategoieComponent } from './componentback/categoie/categoie.component';
import { FormulairecategorieComponent } from './componentback/formulairecategorie/formulairecategorie.component';
import { ModifierbonplanComponent } from './componentback/modifierbonplan/modifierbonplan.component';
import { DetaillebonplansComponent } from './componentback/detaillebonplans/detaillebonplans.component';

import {FormpromoComponent} from "./componentback/formpromo/formpromo.component";
import {GuardGuard} from "../guard/guard.guard";

const routes: Routes = [
  {path:'',component :BackofficeComponent,children:[
      { path: 'dash', component: DashboardComponent },
      {path:'basic',component:FormulaireComponent},
      {path:'materiel',component:MaterielComponent},
      {path:'tableusers',component:TableusersComponent},
      {path:'formevent', component:FormeventComponent},
      {path:'addbonpan',component:FormbonplanComponent},
      {path:'showbonplan',component:ListebonplanComponent},
      {path:'updatebonplan',component:ModifierbonplanComponent },
      {path:'detailsbp/:id',component:DetaillebonplansComponent},
      {path:'categorie',component:CategoieComponent},
      {path:'addcategorie',component:FormulairecategorieComponent},
      {path:'promo',component:FormpromoComponent},

    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
