import { Component, OnInit } from '@angular/core';
import {Emitters} from "../../emitters/emitters";
import {HttpClient} from "@angular/common/http";
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 authenticated =false;
 public totalItem : number = 0;

  constructor( private http:HttpClient,
   private panierservic: PanierService) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe( (auth: boolean) => {
      this.authenticated = auth;
    });
    this.panierservic.getpanier().subscribe((res =>{this.totalItem = res.length;}));
  
  }



  logout():void{
    this.http.post('http://localhost:5000/utilisateurs/logout',{}, {withCredentials: true}).subscribe(() =>
      this.authenticated = false);
    }
}
