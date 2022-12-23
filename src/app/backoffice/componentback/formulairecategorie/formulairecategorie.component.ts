import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-formulairecategorie',
  templateUrl: './formulairecategorie.component.html',
  styleUrls: ['./formulairecategorie.component.css']
})
export class FormulairecategorieComponent implements OnInit {

  constructor(private ct:CategorieService,private route:Router,private toaster:ToastrService) {
    this.ct.addcategorie

   }

  ngOnInit(): void {
  }
addcat(f:any){
  let data=f.value;
  this.ct.addcategorie(data).subscribe(response=>{
    console.log(response)
    this.route.navigate(['/categorie'])
    this.toaster.success('Categorie ajouter avec succé')
  },(error)=>{
    this.toaster.error('error','error')
  })
}
}
