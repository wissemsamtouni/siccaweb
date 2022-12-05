import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class DashService {
  utilisateurUrl: string = "http://localhost:5000/utilisateurs/getAllUsers";

  constructor(private HttpC:HttpClient) { }



  getUsers(){

    return this.HttpC.get<any>(this.utilisateurUrl);
  }
}
