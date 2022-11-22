import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptService} from "../services/script.service";

const SCRIPT_PATH_LIST =[

  "../../assets/backassets/vendors/core/core.js",
  "../../assets/backassets/vendors/flatpickr/flatpickr.min.js",
  "../../assets/backassets/vendors/apexcharts/apexcharts.min.js",
  "../../assets/backassets/vendors/feather-icons/feather.min.js",
  "../../assets/backassets/js/template.js",
  "../../assets/backassets/js/dashboard-light.js"


]
@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  constructor(private renderer: Renderer2,
              private ScriptServiceService: ScriptService) { }

  ngOnInit() {
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
