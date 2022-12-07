import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BanuserService {
  banUrl: string = "http://localhost:5000/utilisateurs/banner/";

  constructor(private HttpC:HttpClient) { }



  banner(id_utilisateur:number,newuser:any){

    return this.HttpC.put<any>(this.banUrl + id_utilisateur,newuser);
  }
}
