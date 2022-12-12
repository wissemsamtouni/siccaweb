import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from "../../../services/profileService/profile.service";
import {Router} from "@angular/router";
import {utilisateur} from "../../../model/utilisateur";
import {HttpClient} from "@angular/common/http";
import {Emitters} from "../../../emitters/emitters";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
@ViewChild('inputiduser') inputiduser!: ElementRef;
  @ViewChild('inputprenom') inputprenom!: ElementRef;
  @ViewChild('inputnom') inputnom!: ElementRef;
  @ViewChild('inputmail') inputmail!: ElementRef;
  @ViewChild('inputtel') inputtel!: ElementRef;
  @ViewChild('inputlogin') inputlogin!: ElementRef;
  @ViewChild('inputadresse') inputadresse!: ElementRef;


Utilisateur!:utilisateur;
  id_utilisateur!:number;
  nom: string = "";
  prenom: string = "";
  login: string = "";
  mail: string = "";
  tel!:number;
  adresse: string = "";




  constructor(private profileService:ProfileService,private router:Router,private toast:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:5000/utilisateurs/afficheruser', { withCredentials: true }).subscribe(
      (res:any) => {
        this.id_utilisateur=res.id_utilisateur;
        this.nom = res.nom;
        this.prenom = res.prenom;
        this.login = res.login;
        this.mail = res.mail;
        this.adresse = res.adresse;
        this.tel = res.tel;
        this.id_utilisateur = res.id_utilisateur;
        // RECUPERER LES DONNEES DE L'UTILISATEUR CONNECTE

        Emitters.authEmitter.emit(true);
      },
      err => {

        Emitters.authEmitter.emit(false);
      }
    );

  }

update(){
    try {
      let User = {
        idUser:this.inputiduser.nativeElement.value,
        nom:this.inputnom.nativeElement.value,
        prenom:this.inputprenom.nativeElement.value,
        mail:this.inputmail.nativeElement.value,
        login:this.inputlogin.nativeElement.value,
        adresse:this.inputadresse.nativeElement.value,
        tel:this.inputtel.nativeElement.value,


      }
      this.profileService.updateUser(User).subscribe(()=>this.router.navigate(['front/Acceuil']));
      this.toast.success('Profile updated successfully');
    }catch (e) {
      this.toast.error('Profile not updated');
    }

    }

}
