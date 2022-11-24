import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonplansService {
  constructor(private hhtp:HttpClient) { }
  //bonplan//
  getallbp(){
  return this.hhtp.get('url')
  }
  getallcategorie(){
    return this.hhtp.get('url')
    }
    //categorie//
  addbp(bonplan:any){
return this.hhtp.post('url',bonplan)
  }
  addcategorie(cat:any){
    return this.hhtp.post('url',cat)
      }
  
}
