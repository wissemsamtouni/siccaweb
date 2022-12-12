import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonplansService {
  constructor(private http:HttpClient) { }
  //bonplan//
  getallbp(){

  return this.http.get<any>('http://localhost:5000/bonplans/')

  }

  addbp(bonplan:any){
    return this.http.post('http://localhost:5000/bonplans/addbp',bonplan)
      }
 
      deletebp(id: any) {
        return this.http.delete('http://localhost:5000/bonplans/delete/'+id)
      }
      updatebp(id: any,newbonplans:any) {
        return this.http.put('http://localhost:5000/bonplans/update/'+id,newbonplans)
      }
  getone(id:any){
    return this.http.get<any>('http://localhost:5000/bonplans/'+id)
  }
}
