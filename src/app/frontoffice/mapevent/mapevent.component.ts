import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-mapevent',
  templateUrl: './mapevent.component.html',
  styleUrls: ['./mapevent.component.css']
})
export class MapeventComponent implements OnInit {
  map!:L.Map;

  constructor() { }

  ngOnInit(): void {
      
    const map = L.map('map').setView([36.181133, 8.713061], 13);

    L.    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markerItem= L.marker([36.181133, 8.713061]).addTo(map).bindPopup('SiccaJazz').openPopup();
 
     var circle = L.circle([ 36.181133, 8.713061], {
       color: 'streelbue',         //Circle trajectory color, that is, the color of the outer border
       fillColor: 'streelbue',    //Fill in the color, the default value is the same as the color value
       fillOpacity: 0.5,     //Filling Transparency
       radius: 500           //circle radius, in meters
   }).addTo(this.map);
  setTimeout(()=>{
   this.map.invalidateSize();
   
  },0)


  }

}
