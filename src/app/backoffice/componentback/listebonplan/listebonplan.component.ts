import { Component, OnInit } from '@angular/core';
import { BonplansService } from 'src/app/services/bonplans.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listebonplan',
  templateUrl: './listebonplan.component.html',
  styleUrls: ['./listebonplan.component.css']
})
export class ListebonplanComponent implements OnInit {
  listecategorie:any
  listeBP: any
  bpfilter!:string;
  upbonblans = {
    CategorieId: '',
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

  constructor(private bp: BonplansService,private ct:CategorieService, private route: Router,private toaster:ToastrService) {

    this.bp.getallbp().subscribe(data => {this.listeBP = data.bpl
      console.log(data)
    })
    this.ct.getallcategorie().subscribe(data=>this.listecategorie=data.cat)
  }

  ngOnInit(): void {
  }
  details(id: any) {
    this.route.navigate(['/detailsbp/' + id])
  }

  deletebonplans(id: any, i: number) {
    this.bp.deletebp(id).subscribe(response => {
      console.log(response)
      this.listeBP.splice(i, 1)
      this.toaster.success('Bonplan Supprimer avec succé')
    },(error)=>{
      this.toaster.error('error','error')
    
        }
    )
  }
  getbp(CategorieId: string, id: any, non_bp: string, adresse: string, description: string, logitude: any, latitude: any, horaire: string, frais: string, imageSRC: string) {
    this.upbonblans.CategorieId = CategorieId
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

  updatebonplans(f: any) {
    let data = f.value
    this.bp.updatebp(this.upbonblans.id, data).subscribe(response => {
      console.log(response)
      let indexid = this.listeBP.findIndex((obj: any) => obj.id == this.upbonblans.id)
      this.listeBP[indexid].non_bp = data.non_bp
      this.listeBP[indexid].CategorieId = data.CategorieId
      this.listeBP[indexid].adresse = data.adresse
      this.listeBP[indexid].description = data.description
      this.listeBP[indexid].frais = data.frais
      this.listeBP[indexid].horaire = data.horaire
      this.listeBP[indexid].logitude = data.logitude
      this.listeBP[indexid].latitude = data.latitude
      this.listeBP[indexid].imageSRC = data.imageSRC
      this.route.navigate(['/showbonplan'])
      this.toaster.success('Bonplan Modifier avec succé')
    },(error)=>{
      this.toaster.error('error','error')
    
        }
    )

  }
}

