import { Component, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'stream';
import {evenement} from "../../model/evenement";
import {EvenementService} from "../../services/evenement.service";
import {utilisateur} from "../../model/utilisateur";
import {promo} from "../../model/promo";
import {PromoService} from "../../services/promo/promo.service";
import {DashService} from "../../services/dashService/dash.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {
  listevent!: evenement[];
  evennement!: evenement;
  listpromo!: promo[];
  searchevent !: string;
utilisateur!:utilisateur;
idutilisateur : any;

  constructor( private router:Router,private eventService: EvenementService,private userserv:DashService,private prService:PromoService,
    private tostrservice:ToastrService) { }

  ngOnInit(): void {
    this.utilisateur=new utilisateur();
    this.evennement = new evenement();
    this.eventService.getallevent().subscribe((data) => this.listevent = (data.event));
    this.eventService.getallevent().subscribe((data) => console.log(data.event));
    this.userserv.getUser().subscribe((data)=>
    this.idutilisateur=data.id_utilisateur);


  }

  // searcheventByTitre(titre:any){
  //   console.log(titre);
  //   //this.eventService.searchevent(titre).subscribe((data) => console.log(data),);
  //   this.eventService.searchevent(titre).subscribe((data) => console.log(data),);
  // }

  ajouterevenement(evenement: evenement) {

console.log(this.idutilisateur);
if (this.idutilisateur==null){
  this.tostrservice.error("Vous devez vous connecter pour participer à un événement");
  this.router.navigate(['/auth/login']);
}
    this.eventService.addpanier(evenement.id,this.idutilisateur,1,evenement.prixticket).subscribe((data) => {
      this.tostrservice.success( 'Ajouter au panier avec success');
    } );



  }
}
