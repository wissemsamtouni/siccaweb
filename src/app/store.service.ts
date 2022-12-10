import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'src/assets/backassets/vendors/tinymce/tinymce';
import { evenement } from './model/evenement';
const STORE_BASE_URL='https://fakestoreapi.com';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  // getAllProducts(limit = '12',sort='desc'):Observable<Array<evenement>>{
  //   // return this.http.get<Array<evenement>>(
  //   //   `${STORE_BASE_URL}/evenements?limit=${limit}&sort=${sort}`
  //   // )
  //  // return this.http.get<Array<evenement>>(`${STORE_BASE_URL}/evenements?limit=${limit}&sort=${sort}`);
  // }
  
}
