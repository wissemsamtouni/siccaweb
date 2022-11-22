import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptService } from '../services/script.service';
const SCRIPT_PATH_LIST =[

"../assets/frontassets/js/bootstrap.bundle.min.js",
"../assets/frontassets/js/tiny-slider.js",
"../assets/frontassets/js/custom.js"


]
@Component({
  selector: 'app-frontoffice',
  templateUrl: './frontoffice.component.html',
  styleUrls: ['./frontoffice.component.css']
})
export class FrontofficeComponent implements OnInit {

  constructor(private renderer: Renderer2,
    private ScriptServiceService: ScriptService) { }

  ngOnInit(): void {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
        console.log('loaded');

      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }

    })

  }

}
