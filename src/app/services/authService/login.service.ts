import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  utilisateurPostUrl: string = "http://localhost:5000/utilisateurs/login";

  constructor(private httpU:HttpClient) { }

  login(u: utilisateur) {
    return this.httpU.post<utilisateur>(this.utilisateurPostUrl, u);

  }
}
