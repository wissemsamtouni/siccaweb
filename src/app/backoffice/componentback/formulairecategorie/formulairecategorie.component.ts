import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-formulairecategorie',
  templateUrl: './formulairecategorie.component.html',
  styleUrls: ['./formulairecategorie.component.css']
})
export class FormulairecategorieComponent implements OnInit {

  constructor(private ct:CategorieService,private route:Router) {
    this.ct.addcategorie

   }

  ngOnInit(): void {
  }
addcat(f:any){
  let data=f.value;
  this.ct.addcategorie(data).subscribe(response=>{
    console.log(response)
    this.route.navigate(['/categorie'])
  })
}
}
