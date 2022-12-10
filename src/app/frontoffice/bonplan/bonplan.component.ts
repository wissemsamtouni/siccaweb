import { Component, OnInit } from '@angular/core';
import { BonplansService } from 'src/app/services/bonplans.service';

@Component({
  selector: 'app-bonplan',
  templateUrl: './bonplan.component.html',
  styleUrls: ['./bonplan.component.css']
})
export class BonplanComponent implements OnInit {
  listeBP:any
  upbonblans = {
    Categorie: '',
    id: '',
    non_bp: '',
    adresse: '',
    description: '',
    logitude: '',
    latitude: '',
    horaire: '',
    frais: '',
    imageSRC: '',

  }

  constructor(private bp: BonplansService) {

    this.bp.getallbp().subscribe(data => {this.listeBP = data.bpl
    console.log(data)
    })

  } 

  ngOnInit(): void {
  }
  getbp(Categorie: string, id: any, non_bp: string, adresse: string, description: string, logitude: any, latitude: any, horaire: string, frais: string, imageSRC: string) {
    this.upbonblans.Categorie = Categorie
    this.upbonblans.id = id
    this.upbonblans.non_bp = non_bp
    this.upbonblans.adresse = adresse
    this.upbonblans.description = description
    this.upbonblans.frais = frais
    this.upbonblans.horaire = horaire
    this.upbonblans.logitude = logitude
    this.upbonblans.latitude = latitude
    this.upbonblans.imageSRC = imageSRC
  }


}
