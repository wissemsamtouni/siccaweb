import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./backoffice/notfound/notfound.component";



const routes: Routes = [

 { path: 'front', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)},

  { path: 'back', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },

  { path: 'auth', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },

  {path:'**',component:NotfoundComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
