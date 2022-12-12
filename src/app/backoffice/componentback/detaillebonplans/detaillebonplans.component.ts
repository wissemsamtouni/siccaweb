import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BonplansService } from 'src/app/services/bonplans.service';

@Component({
  selector: 'app-detaillebonplans',
  templateUrl: './detaillebonplans.component.html',
  styleUrls: ['./detaillebonplans.component.css']
})
export class DetaillebonplansComponent implements OnInit {
id=''
listbp:any
  constructor(private route :ActivatedRoute,private bp:BonplansService) {
this.route.params.subscribe(data=>this.id=data['id'])
this.bp.getone(this.id).subscribe(response=>{this.listbp=response.bplData
console.log(response)})
   }

  ngOnInit(): void {
  }

}
