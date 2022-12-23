import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class DashService {
  utilisateurUrl: string = "http://localhost:5000/utilisateurs/getAllUsers";
  oneuser: string="http://localhost:5000/utilisateurs/afficheruser";

  constructor(private HttpC:HttpClient) { }



  getUsers(){

    return this.HttpC.get<any>(this.utilisateurUrl);
  }
  getUser(){

      return this.HttpC.get<any>(this.oneuser,{withCredentials:true});
  }
}
