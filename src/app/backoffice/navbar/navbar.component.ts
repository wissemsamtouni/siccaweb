import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emitters} from "../../emitters/emitters";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated =false;
  constructor( private http:HttpClient,private router:Router) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe( (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }
  logout():void{
    this.http.post('http://localhost:5000/utilisateurs/logout',{}, {withCredentials: true}).subscribe(() =>
      this.authenticated = false);
  }

}
