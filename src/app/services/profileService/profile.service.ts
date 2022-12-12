import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  utilisateurUrl: string = "http://localhost:5000/utilisateurs/afficheruser";
  utilisateurUpdate: string = "http://localhost:5000/utilisateurs/update";
  utUrl: string = "http://localhost:5000/utilisateurs/getUser";
  mdpUrl: string = "http://localhost:5000/utilisateurs/resetpassword";

  constructor(private HttpC: HttpClient) {
  }


  getuser() {
    return this.HttpC.get<utilisateur>(this.utilisateurUrl);
  }

  getUserById(id_utilisateur: number) {

    return this.HttpC.get<utilisateur>(this.utUrl + id_utilisateur);
  }

  updateUser(u: any) {
    return this.HttpC.put(this.utilisateurUpdate, u)
  }

  resetPassword(u: any) {
    return this.HttpC.put(this.mdpUrl, u)
  }
}
