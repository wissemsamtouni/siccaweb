import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ApproposComponent } from './appropos/appropos.component';
import { BonplanComponent } from './bonplan/bonplan.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { FrontofficeComponent } from './frontoffice.component';

import { Map2Component } from './map2/map2.component';
import { MaterielComponent } from './materiel/materiel.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PanierComponent } from './panier/panier.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  {path:'',component :FrontofficeComponent,children:[
    {path:'Acceuil', component: AcceuilComponent},
    {path:'Evenement', component:EvenementsComponent},
    {path:'Apropos ', component:ApproposComponent},
    {path:'Bonplan', component:BonplanComponent},
    {path:'Materiel', component:MaterielComponent },
    {path:'Contact', component:ContactComponent},
    {path:'panier', component:PanierComponent},
    {path:'paiement', component:PaiementComponent},
    {path:'thankyou', component:ThankyouComponent},
    {path:'map/:id',component:Map2Component}
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
