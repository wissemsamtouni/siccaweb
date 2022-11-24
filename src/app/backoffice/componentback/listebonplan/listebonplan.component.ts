import { Component, OnInit } from '@angular/core';
import { BonplansService } from 'src/app/services/bonplans.service';

@Component({
  selector: 'app-listebonplan',
  templateUrl: './listebonplan.component.html',
  styleUrls: ['./listebonplan.component.css']
})
export class ListebonplanComponent implements OnInit {
  listeBP:any

  constructor(private bp:BonplansService) {
this.bp.getallbp().subscribe(data=>this.listeBP=data)
   }

  ngOnInit(): void {
  }

}
