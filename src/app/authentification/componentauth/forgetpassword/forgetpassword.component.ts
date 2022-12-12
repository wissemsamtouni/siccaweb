import { Component, OnInit } from '@angular/core';
import {ResetPasswordService} from "../../../services/authService/reset-password.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  emailUser!:string;
  constructor(private servicelink:ResetPasswordService,private toast:ToastrService) { }

  ngOnInit(): void {
  }
  sendLinkReset(){
    this.servicelink.sendLink(this.emailUser).subscribe({
      next:(result:any)=>{this.toast.success(result.message,result.titre)},
      error:(error:any)=>{this.toast.error(error.error.message,error.titre)},
      complete:()=>{}
    })
  }

}
