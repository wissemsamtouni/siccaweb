import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private panierservic: PanierService) { }
listeItems: any;
reservation: any;
panier: any;
  ngOnInit(): void {
    this.panierservic.getpanier().subscribe((data) =>{this.listeItems = data.lignepanier});
    
  }

  delete(idpanier:any, iditem:any ){
    console.log(idpanier,iditem)
    this.panierservic.deletpanier(iditem,idpanier,1).subscribe({
      next:(result)=>{alert("suppression")
      },
      error:(err)=>{},
      complete:()=>{this.ngOnInit()}
    })
}




}
