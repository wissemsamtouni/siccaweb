import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './componentback/dashboard/dashboard.component';
import { FormulaireComponent } from './componentback/formulaire/formulaire.component';

import { TableusersComponent } from './componentback/tableusers/tableusers.component';
import { FormeventComponent } from './componentback/formevent/formevent.component';
import { FormbonplanComponent } from './componentback/formbonplan/formbonplan.component';
import { FormpromoComponent } from './componentback/formpromo/formpromo.component';
import { ChatComponent } from './componentback/chat/chat.component';
import { CalendrierComponent } from './componentback/calendrier/calendrier.component';
import { EmailComponent } from './componentback/email/email.component';
import{FormsModule} from'@angular/forms';
import { ListebonplanComponent } from './componentback/listebonplan/listebonplan.component';
import { CategoieComponent } from './componentback/categoie/categoie.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarComponent,
    SidbarComponent,
    FooterComponent,
    NotfoundComponent,
    DashboardComponent,
    FormulaireComponent,

    TableusersComponent,
    FormeventComponent,
    FormbonplanComponent,
    FormpromoComponent,
    ChatComponent,
    CalendrierComponent,
ListebonplanComponent,
CategoieComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule
  ]
})
export class BackofficeModule { }
