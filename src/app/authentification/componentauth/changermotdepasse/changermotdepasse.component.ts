import { Component, OnInit } from '@angular/core';
import {ResetPasswordService} from "../../../services/authService/reset-password.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-changermotdepasse',
  templateUrl: './changermotdepasse.component.html',
  styleUrls: ['./changermotdepasse.component.css']
})
export class ChangermotdepasseComponent implements OnInit {
   mdp!:string
   id_utilisateur!:string
   token!:string
  constructor(private service:ResetPasswordService,private toast:ToastrService,private ac:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id_utilisateur=this.ac.snapshot.params["id_utilisateur"]
    this.token=this.ac.snapshot.params["token"]
    }
  resetNewPassword(){
    this.service.resetPassword(this.mdp,this.id_utilisateur,this.token).subscribe({
      next:(result)=>{this.toast.success(result.message,result.titre)
        this.route.navigate(["/auth/login"])},
      error:(error)=>{
        console.log(error)
        this.toast.error(error.error.message,error.titre)},
      complete:()=>{}
    })
  }
}


