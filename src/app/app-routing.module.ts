import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./backoffice/notfound/notfound.component";
import { AcceuilComponent } from './frontoffice/acceuil/acceuil.component';



const routes: Routes = [
  {path:'',redirectTo:'Acceuil',
  pathMatch:'full'},
 { path: '', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)},
  { path: '', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },

  { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
  {path:'**',component:NotfoundComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
