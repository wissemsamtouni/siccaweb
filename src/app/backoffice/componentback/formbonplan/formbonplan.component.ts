import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BonplansService } from 'src/app/services/bonplans.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-formbonplan',
  templateUrl: './formbonplan.component.html',
  styleUrls: ['./formbonplan.component.css']
})
export class FormbonplanComponent implements OnInit {
  @ViewChild('inputnon_bp') inputnon_bp!:ElementRef;
  @ViewChild('inputcategorie') inputcategorie!:ElementRef;
  @ViewChild('inputadresse') inputadresse!:ElementRef;
  @ViewChild('inputlogitude') inputlogitude!:ElementRef;
  @ViewChild('inputlatitude') inputlatitude!:ElementRef;
  @ViewChild('inputhoraire') inputhoraire!:ElementRef;
  @ViewChild('inputfrais') inputfrais!:ElementRef;
  @ViewChild('inputdescription') inputdescription!:ElementRef;
  @ViewChild('inputimageSRC',{static:false})inputimageSRC!:ElementRef;
  messageErr = ""
   changecategorie(e:any){
    console.log(e.target.value)
  }
 listecategorie:any
  constructor(private bp: BonplansService, private route: Router,private ct:CategorieService) {
this.ct.getallcategorie().subscribe(data=>this.listecategorie=data.cat)
  }
  ngOnInit(): void {
  }
  add() {
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


    this.bp.addbp(formdata).subscribe(response => {
      console.log(formdata)
      this.route.navigate(['/showbonplan'])
    })
  }

}
