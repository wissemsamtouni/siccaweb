import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Emitters} from "../../../emitters/emitters";
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../../../services/profileService/profile.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @ViewChild('inputiduser') inputiduser!: ElementRef;
  @ViewChild('inputpassword') inputpassword!: ElementRef;
  @ViewChild('inputnewpassword') inputnewpassword!: ElementRef;
  @ViewChild('inputconfirmpassword') inputconfirmpassword!: ElementRef;

  id_utilisateur!: number;

  constructor(private http: HttpClient, private router: Router, private toast: ToastrService, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/utilisateurs/afficheruser', {withCredentials: true}).subscribe(
      (res: any) => {
        this.id_utilisateur = res.id_utilisateur;

        // RECUPERER LES DONNEES DE L'UTILISATEUR CONNECTE

        Emitters.authEmitter.emit(true);
      },
      err => {

        Emitters.authEmitter.emit(false);
      }
    );

  }


  resetPassword() {
    try {
      let User = {
        idUser: this.inputiduser.nativeElement.value,
        oldPassword: this.inputpassword.nativeElement.value,
        newPassword: this.inputnewpassword.nativeElement.value,
      }
      if(this.inputpassword.nativeElement.value==this.inputnewpassword.nativeElement.value){
        this.toast.error("Old password and new password are the same");
      }
      else if (this.inputnewpassword.nativeElement.value !== this.inputconfirmpassword.nativeElement.value) {
        this.toast.error('Les mots de passe ne correspondent pas', 'Erreur');
      } else {
        this.profileService.resetPassword(User).subscribe(() => this.router.navigate(['front/Profile']),);

      }
    } catch (e) {
      console.log(e);
      this.toast.error('ancient mot de passe incrrect', 'Erreur');

    }

  }
}
