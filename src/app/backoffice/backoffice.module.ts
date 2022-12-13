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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListebonplanComponent } from './componentback/listebonplan/listebonplan.component';
import { CategoieComponent } from './componentback/categoie/categoie.component';
import { FormulairecategorieComponent } from './componentback/formulairecategorie/formulairecategorie.component';
import { ModifierbonplanComponent } from './componentback/modifierbonplan/modifierbonplan.component';
import { DetaillebonplansComponent } from './componentback/detaillebonplans/detaillebonplans.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';






const SCRIPT_PATH_LISt = [
  "../../../assets/backassets/vendors/core/core.js",
  "../../..assets/backassets/vendors/flatpickr/flatpickr.min.js",
  "../../..assets/backassets/vendors/apexcharts/apexcharts.min.js",
  "../../../assets/backassets/vendors/feather-icons/feather.min.js",
  "../assets/backassets/js/template.js",
  "../../../assets/backassets/js/dashboard-light.js",
  "../../../assets/frontassets/js/bootstrap.bundle.min.js",
  "../../../assets/frontassets/js/tiny-slider.js",
  "../../../assets/frontassets/js/custom.js"


]



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
    CategoieComponent,
    FormulairecategorieComponent,
    ModifierbonplanComponent,
    DetaillebonplansComponent,
   
    
 
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
   
    
   
  ]
})
export class BackofficeModule { }
