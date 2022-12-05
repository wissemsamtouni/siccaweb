import { Component, OnInit } from '@angular/core';
import { BonplansService } from 'src/app/services/bonplans.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listebonplan',
  templateUrl: './listebonplan.component.html',
  styleUrls: ['./listebonplan.component.css']
})
export class ListebonplanComponent implements OnInit {
  listeBP:any

  constructor(private bp:BonplansService,private route:Router) {

this.bp.getallbp().subscribe(data=>this.listeBP=data.bpl)

   }

  ngOnInit(): void {
  }
  details(id:any){
this.route.navigate(['/detailsbp/'+id])
  }
}
