import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  makePayment(stripeToken: any): Observable<any>{
    const url = "http://localhost:5000/checkout"

    return this.http.post<any>(url,{token:stripeToken})
  }

}
