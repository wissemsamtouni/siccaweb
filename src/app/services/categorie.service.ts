import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getallcategorie() {
    return this.http.get<any>('http://localhost:5000/categorie/')
  }
  addcategorie(cat: any) {
    return this.http.post('http://localhost:5000/categorie/addcat', cat)
  }
  deletecategorie(id: any) {
    return this.http.delete('http://localhost:5000/categorie/delete'+id)
  }
  updatecategorie(id: any,newcat:any) {
    return this.http.patch('http://localhost:5000/categorie/update'+id,newcat)
  }
}
