import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
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
    this.xx=parseInt(response.bplData.latitude)
     this.yy=parseInt(response.bplData.logitude)
     console.log(this.xx)
     console.log(this.yy)
    console.log(response)})



   }

  ngOnInit(): void {
  
    const map = L.map('map').setView([36.181133, 8.713061], 13);

    L.    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markerItem= L.marker([36.181133, 8.713061]).addTo(map).bindPopup('Dar Boumakhlouf').openPopup();
 
     var circle = L.circle([ 36.181133, 8.713061], {
       color: 'streelbue',         //Circle trajectory color, that is, the color of the outer border
       fillColor: 'streelbue',    //Fill in the color, the default value is the same as the color value
       fillOpacity: 0.5,     //Filling Transparency
       radius: 500           //circle radius, in meters
   }).addTo(map);
  setTimeout(()=>{
   this.map.invalidateSize();
   
  },0)


  }

}
