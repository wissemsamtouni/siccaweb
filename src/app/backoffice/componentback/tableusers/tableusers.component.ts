import { Component, OnInit } from '@angular/core';
import {utilisateur} from "../../../model/utilisateur";
import {DashService} from "../../../services/dashService/dash.service";
import {BanuserService} from "../../../services/dashService/banuser.service";

@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrls: ['./tableusers.component.css']
})
export class TableusersComponent implements OnInit {
  list!:utilisateur[];
  Utilisateur!:utilisateur;
  aaa!:string;

  constructor(private dashService:DashService,private banService:BanuserService) { }

  ngOnInit(): void {

    this.Utilisateur=new utilisateur();
    this.dashService.getUsers().subscribe((data)=>this.list=(data.users),);
  }
  banner(id_utilisateur:number){
    this.banService.banner(id_utilisateur,this.Utilisateur).subscribe();
    window.location.reload();

  }
}
