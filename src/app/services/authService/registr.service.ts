import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class RegistrService {
  utilisateurUrl: string = "http://localhost:5000/utilisateurs/getAllUsers";
  utilisateurPostUrl: string = "http://localhost:5000/utilisateurs/registr";

  constructor
  (private HttpU: HttpClient) {
  }

  getUser() {
    return this.HttpU.get<utilisateur[]>(this.utilisateurUrl);
  }
  postUser(u: utilisateur) {
     return this.HttpU.post<utilisateur>(this.utilisateurPostUrl, u);

  }
}
