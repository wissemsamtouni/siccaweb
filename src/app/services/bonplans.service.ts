import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonplansService {
  constructor(private hhtp:HttpClient) { }
  //bonplan//
  getallbp(){
  return this.hhtp.get<any>('http://localhost:5000/bonplans/')
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
