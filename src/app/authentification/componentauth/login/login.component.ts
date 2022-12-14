import { Component, OnInit } from '@angular/core';
import {utilisateur} from "../../../model/utilisateur";
import {LoginService} from "../../../services/authService/login.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Emitters} from "../../../emitters/emitters";
import {ToastrService} from 'ngx-toastr';
import {observeNotification} from "rxjs/internal/Notification";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur!:utilisateur;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      login: '',
      mdp: ''
    });
  }

  submit(): void {

    console.log(this.form.getRawValue())

  try {
    this.http.post('http://localhost:5000/utilisateurs/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe((response:any) => {
      console.log("hello");
      Emitters.authEmitter.emit(true);


      console.log(response.x);

      if(response.y==="0"){

        console.error("user banned");
        this.toastr.error('user banned');

      }

     else if(response.x==='client'){


        this.router.navigate(['front/Acceuil']).then(() => {


         this.toastr.success('Welcome ');



        });
      }else {


        this.router.navigate(['back/dash']).then(() => {

          this.toastr.success('Welcome administator');


        });

      }
    }, err => {
      console.log(err);
      this.toastr.error('Login ou mot de passe incorrect');


    }
);




  } catch (error) {
    console.log(error);

  }


  }

}
