import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonplansService {
  constructor(private hhtp:HttpClient) { }
  //bonplan//
  getallbp(){
  return this.hhtp.get('http://localhost:5000/bonplans/')
  }

  addbp(bonplan:any){
    return this.hhtp.post('http://localhost:5000/bonplans/addbp',bonplan)
      }
 
    //categorie//
    getallcategorie(){
      return this.hhtp.get('url')
      }
  addcategorie(cat:any){
    return this.hhtp.post('url',cat)
      }
  
}
