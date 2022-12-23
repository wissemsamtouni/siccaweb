import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

import { BonplansService } from 'src/app/services/bonplans.service';
@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements OnInit {
  map!:L.Map;
  id=''
  listbp:any
  xx=0
  yy=0
  constructor(private bp:BonplansService,private route :ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data['id'])
    this.bp.getone(this.id).subscribe(response=>{this.listbp=response.bplData
    this.xx=response.bplData.latitude
     this.yy=response.bplData.logitude
     console.log("x:"+this.xx)
     console.log(typeof this.xx)
     console.log("y"+this.yy)
    console.log(response)})



   }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBZ2mqgEPqEMa4za9uX6S_bCxxzlstupOU'
    })

    loader.load().then(() => {

      let map = new google.maps.Map(document.getElementById('map')!, {

        center: {lat: this.xx, lng: this.yy},
        zoom: 13,
      })


   new google.maps.Marker({
        position: {lat: this.xx, lng: this.yy },
        map: map,
        title: this.listbp.non_bp
      });

    })

  }

}
