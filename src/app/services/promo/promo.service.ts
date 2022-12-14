import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {utilisateur} from "../../model/utilisateur";
import {promo} from "../../model/promo";

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  eventUrl: string = "http://localhost:5000/event/af";
  matUrl:string="http://localhost:5000/materiel/getAllMateriel";
  promoUrl: string = "http://localhost:5000/promo/addpromo";
  allpromourl:string="http://localhost:5000/promo/getAllPromo";
  deletepromo:string="http://localhost:5000/promo/deletepromo/";
  constructor(private HttpC: HttpClient) {
  }


  getevent() {
    return this.HttpC.get<any>(this.eventUrl);
  }
  getmateriel() {
    return this.HttpC.get<any>(this.matUrl);
  }
  addpromo(p:promo) {
    return this.HttpC.post<promo>(this.promoUrl,p);
  }
  getallpromo() {
    return this.HttpC.get<any>(this.allpromourl);
  }
  delete(id_promo:number) {
    return this.HttpC.delete<any>(this.deletepromo+id_promo);
  }

}
