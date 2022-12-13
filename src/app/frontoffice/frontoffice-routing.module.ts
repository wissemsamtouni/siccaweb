import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ApproposComponent } from './appropos/appropos.component';
import { BonplanComponent } from './bonplan/bonplan.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { FrontofficeComponent } from './frontoffice.component';
import { MapeventComponent } from './mapevent/mapevent.component';
import { MaterielComponent } from './materiel/materiel.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PanierComponent } from './panier/panier.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import {ClientGuard} from "../guard/client.guard";
import {ProfileComponent} from "./profileedit/profile/profile.component";
import {PasswordComponent} from "./profileedit/password/password.component";


const routes: Routes = [
  {
    path: '', component: FrontofficeComponent, children: [
      {path: 'Profile', component: ProfileComponent},
      {path: 'Acceuil', component: AcceuilComponent},
      {path: 'Evenement', component: EvenementsComponent},
      //{path:'Apropos ', component:ApproposComponent},
      {path: 'Apropos', component: ApproposComponent},
      {path: 'Bonplan', component: BonplanComponent},
      {path: 'Materiel', component: MaterielComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'panier', component: PanierComponent},
      {path: 'paiement', component: PaiementComponent},
      {path: 'thankyou', component: ThankyouComponent},

      {path: 'mapevent', component: MapeventComponent},

      {path: 'password', component: PasswordComponent},


    ]
  }
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
