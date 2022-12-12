import { Component, OnInit } from '@angular/core';
import {PromoService} from "../../../services/promo/promo.service";
import {evenement} from "../../../model/evenement";
import {materiel} from "../../../model/materiel";
import {promo} from "../../../model/promo";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-formpromo',
  templateUrl: './formpromo.component.html',
  styleUrls: ['./formpromo.component.css']
})
export class FormpromoComponent implements OnInit {
 listevent!:evenement[];
 listmateriel!:materiel[];
 Promo!:promo;
  constructor(private Service:PromoService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Promo=new promo();

    this.Service.getevent().subscribe((data)=>this.listevent=(data.event),);
    this.Service.getmateriel().subscribe((data)=>this.listmateriel=(data.materiels),);
  }
  savePromo(){
    console.log(this.Promo);
    this.Service.addpromo(this.Promo).subscribe(()=>this.router.navigate(['/back/promo']));
    this.toastr.success("promo ajouter avec succées")


  }

  selectMateriel(event:any){
    this.Promo.materielIdMateriel=event.target.value;
  }
  selectEvent(event:any){
    this.Promo.EvenementId=event.target.value;
  }
}
