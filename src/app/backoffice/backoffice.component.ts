import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptService} from "../services/script.service";

const SCRIPT_PATH_LIST =[

  "../../assets/backassets/vendors/core/core.js",
  "../../assets/backassets/vendors/flatpickr/flatpickr.min.js",
  "../../assets/backassets/vendors/apexcharts/apexcharts.min.js",
  "../../assets/backassets/vendors/feather-icons/feather.min.js",
  "../../assets/backassets/js/template.js",
  "../../assets/backassets/js/dashboard-light.js",
  "../../assets/backassets/js/pickr.js",
 "../../assets/backassets/js/flatpickr.js",
"../../assets/backassets/vendors/jquery-validation/jquery.validate.min.js",
   "../../assets/backassets/vendors/bootstrap-maxlength/bootstrap-maxlength.min.js",
   "../../assets/backassets/vendors/inputmask/jquery.inputmask.min.js",
   "../../assets/backassets/vendors/select2/select2.min.js",
  "../../assets/backassets/vendors/typeahead.js/typeahead.bundle.min.js",
  "../../assets/backassets/vendors/jquery-tags-input/jquery.tagsinput.min.js",
   "../../assets/backassets/vendors/dropzone/dropzone.min.js",
  "../../assets/backassets/vendors/dropify/dist/dropify.min.js",
 "../../assets/backassets/vendors/pickr/pickr.min.js",
   "../../assets/backassets/vendors/moment/moment.min.js",
 "../../assets/backassets/vendors/flatpickr/flatpickr.min.js",
   "../../assets/backassets/js/form-validation.js",
   "../../assets/backassets/js/bootstrap-maxlength.js",
   "../../assets/backassets/js/inputmask.js",
  "../../assets/backassets/js/select2.js",
  "../../assets/backassets/js/typeahead.js",
  "../../assets/backassets/js/tags-input.js",
   "../../assets/backassets/js/dropzone.js",
  "../../assets/backassets/js/dropify.js",
  "../assets/frontassets/js/bootstrap.bundle.min.js",
  "../assets/frontassets/js/tiny-slider.js",
  "../assets/frontassets/js/custom.js"


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
