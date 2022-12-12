import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ApproposComponent } from './appropos/appropos.component';
import { BonplanComponent } from './bonplan/bonplan.component';
import { MaterielComponent } from './materiel/materiel.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapeventComponent } from './mapevent/mapevent.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    EvenementsComponent,
    ApproposComponent,
    BonplanComponent,
    MaterielComponent,
    ContactComponent,
    PanierComponent,
    PaiementComponent,
    ThankyouComponent,
    MapeventComponent,
   
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class FrontofficeModule { }
