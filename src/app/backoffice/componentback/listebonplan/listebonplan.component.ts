import { Component, OnInit } from '@angular/core';
import { BonplansService } from 'src/app/services/bonplans.service';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listebonplan',
  templateUrl: './listebonplan.component.html',
  styleUrls: ['./listebonplan.component.css']
})
export class ListebonplanComponent implements OnInit {
  listeBP:any

  constructor(private bp:BonplansService) {
<<<<<<< HEAD
this.bp.getallbp().subscribe(data=>this.listeBP=data.bpl)
=======
this.bp.getallbp().subscribe(data=>console.log(data));
>>>>>>> 4226eb70d153941d0c9ab49097742a51fb9c1dc4
   }

  ngOnInit(): void {
  }

}
