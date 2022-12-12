import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panierurl : string="api/panier/getp";
  deleteurl : string="api/panier/deleteR/";

  constructor(private  http:HttpClient
    ) { }
  getpanier(){
    return this.http.get<any>(this.panierurl);
  }
  deletpanier(idpanier:any, iditem:any,iduser:any){
    return this.http.delete(this.deleteurl +iditem+"/"+idpanier+"/"+iduser);

  }

}
