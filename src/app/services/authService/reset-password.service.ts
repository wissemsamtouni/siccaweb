import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  resetUrl: string = "http://localhost:5000/utilisateurs/password_reset";
  sendUrl: string = "http://localhost:5000/utilisateurs/sendlink";


  constructor
  (private HttpU: HttpClient) {
  }

  sendLink(mail:string):any {

    return this.HttpU.post<any>(this.sendUrl,{mail})
  }
  resetPassword (mdp:string,id_utilisateur:string,token:string){
    return this.HttpU.post<any>(this.resetUrl+"/"+id_utilisateur+"/"+token,{mdp:mdp})
  }

  // resetPass() {
  //   return this.HttpU.post<any>(this.resetUrl);
  // }
  // sendLink(u: utilisateur) {
  //   return this.HttpU.post<utilisateur>(this.sendUrl, u);
  //
  // }
}
