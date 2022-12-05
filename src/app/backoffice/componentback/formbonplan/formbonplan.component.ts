import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.bp.addbp(data).subscribe(response => 
      this.route.navigate(['/showbonplan'])
  )
  }
 
}
