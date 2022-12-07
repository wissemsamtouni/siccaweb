import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emitters} from "../../emitters/emitters";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  message='';

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/utilisateurs/afficheruser', {withCredentials: true}).subscribe((res: any) => {
      this.message = ( 'Welcome ${res.nom}');
      Emitters.authEmitter.emit(true);
    }, err => {
    this.message = 'You are not logged in';
    Emitters.authEmitter.emit(false);
    }
    );
  }

}
