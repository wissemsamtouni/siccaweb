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
import { ProfileComponent } from './profileedit/profile/profile.component';
import { PasswordComponent } from './profileedit/password/password.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapeventComponent } from './mapevent/mapevent.component';

import { Map2Component } from './map2/map2.component';
import { FormsModule } from '@angular/forms';



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
    Map2Component,
    MapeventComponent,
    ProfileComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    Ng2SearchPipeModule

  ]
})
export class FrontofficeModule { }
