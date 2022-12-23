import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
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
  @ViewChild('inputnon_bp') inputnon_bp!:ElementRef;
  @ViewChild('inputcategorie') inputcategorie!:ElementRef;
  @ViewChild('inputadresse') inputadresse!:ElementRef;
  @ViewChild('inputlogitude') inputlogitude!:ElementRef;
  @ViewChild('inputlatitude') inputlatitude!:ElementRef;
  @ViewChild('inputhoraire') inputhoraire!:ElementRef;
  @ViewChild('inputfrais') inputfrais!:ElementRef;
  @ViewChild('inputdescription') inputdescription!:ElementRef;
  @ViewChild('inputimageSRC',{static:false})inputimageSRC!:ElementRef;
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

  updatebonplans() {
    const CategorieId=  this.inputcategorie.nativeElement.value;
    const non_bp=  this.inputnon_bp.nativeElement.value;
    const adresse=  this.inputadresse.nativeElement.value;
    const logitude=  this.inputlogitude.nativeElement.value;
    const latitude=  this.inputlatitude.nativeElement.value;
    const horaire=  this.inputhoraire.nativeElement.value;
    const frais=  this.inputfrais.nativeElement.value;
    const description=  this.inputdescription.nativeElement.value;
    const imageSRC=  this.inputimageSRC.nativeElement.files[0];
    
    const formdata =  new FormData()
    formdata.set('CategorieId',CategorieId)
    formdata.set('adresse',adresse,)
    formdata.set('non_bp',non_bp,)
    formdata.set('logitude',logitude)
    formdata.set('latitude',latitude,)
    formdata.set('horaire',horaire,)
    formdata.set('frais',frais,)
    formdata.set('description',description,)
    formdata.set('imageSRC',imageSRC,)
  console.log(formdata)
    
    this.bp.updatebp(this.upbonblans.id, formdata).subscribe(response => {
      console.log(response)
      this.route.navigate(['/showbonplan'])
      this.toaster.success('Bonplan Modifier avec succé')
    },(error)=>{
      this.toaster.error('error','error')
    
        }
    )

  }
}

