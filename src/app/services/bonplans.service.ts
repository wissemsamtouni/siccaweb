import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonplansService {
  constructor(private hhtp:HttpClient) { }
  //bonplan//
  getallbp(){
<<<<<<< HEAD
  return this.hhtp.get<any>('http://localhost:5000/bonplans/')
=======
  return this.hhtp.get('http://localhost:5000/bonplans/')
>>>>>>> 4226eb70d153941d0c9ab49097742a51fb9c1dc4
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
