import { Component, OnInit } from '@angular/core';


const SCRIPT_PATH_LIST =[

  "../../assets/backassets/vendors/core/core.js",
  "../../assets/backassets/vendors/feather-icons/feather.min.js",
  "../../assets/backassets/js/template.js",



]
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
