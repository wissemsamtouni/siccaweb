import { Component, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'stream';
import {evenement} from "../../model/evenement";
import {EvenementService} from "../../services/evenement.service";

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {
  listevent!: evenement[];
  evennement!: evenement;
  searchevent !: string;

  constructor(private eventService: EvenementService,
    private tostrservice:ToastrService) { }

  ngOnInit(): void {
    this.evennement = new evenement();
    this.eventService.getallevent().subscribe((data) => this.listevent = (data.event),);
  }

  // searcheventByTitre(titre:any){
  //   console.log(titre);
  //   //this.eventService.searchevent(titre).subscribe((data) => console.log(data),);
  //   this.eventService.searchevent(titre).subscribe((data) => console.log(data),);
  // }

  ajouterevenement(evenement: evenement) {
 console.log(evenement)
    this.eventService.addpanier(evenement.id,1,1,evenement.prixticket).subscribe((data) => {
      this.tostrservice.success( 'Ajouter au panier avec success');
    } );
  

    
  }
}
