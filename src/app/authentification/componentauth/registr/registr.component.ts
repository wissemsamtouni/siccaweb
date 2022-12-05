import { Component, OnInit } from '@angular/core';
import {utilisateur} from "../../../model/utilisateur";
import {RegistrService} from "../../../services/authService/registr.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
  list!:utilisateur[];
  utilisateur!:utilisateur;


  constructor(private registrService:RegistrService ,private router:Router) { }

  ngOnInit(): void {
    this.utilisateur=new utilisateur();
    this.registrService.getUser().subscribe((data:utilisateur[])=>console.log(data),);
  }
saveUser(){
    console.log(this.utilisateur);
    this.registrService.postUser(this.utilisateur).subscribe(()=>this.router.navigate(['/auth/login']));

}

}
