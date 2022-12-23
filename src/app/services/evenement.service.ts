import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {evenement} from "../model/evenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  eventurl : string="http://localhost:5000/event/af";
  eventadd:string="http://localhost:5000/event/add";
  eventdelete: string="http://localhost:5000/event/delet/";
  eventupdate: string="http://localhost:5000/event/update/"
  addpanierurl : string="http://localhost:5000/panier/addR";

  //eventsearch:string="api/event/search?titre="

  constructor(private  http:HttpClient) { }
  getallevent(){
    return this.http.get<any>(this.eventurl);
  }
  addevent(ev:evenement){
    return this.http.post<evenement>(this.eventadd,ev);
  }


  deleteevent(id:any){
    return this.http.delete(this.eventdelete +id);

  }

  updateevent(Idevent: any, newevent:any){
    console.log(newevent);
    return this.http.put(this.eventupdate +Idevent, newevent);

  }

// searchevent(titre:any){
//   return this.http.get<any>(this.eventsearch +titre);
// }

addpanier(idevent:any, iduser:any,quantity:any,prixticket:any){
  return this.http.post<any>(this.addpanierurl+"/"+iduser+"/"+idevent,{quantite:quantity,prixticket:prixticket});
}


}
