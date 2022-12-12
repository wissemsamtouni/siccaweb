import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private router:Router, private http: HttpClient) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.http.get('http://localhost:5000/utilisateurs/afficheruser', {withCredentials: true}).subscribe(
      (res: any) => {
        if (res.length == 0) {
          return true;
        }else if (res.x === 'client') {
          this.router.navigate(['/front/Acceuil']);
          return false;
        }else{
          this.router.navigate(['/back/dash']);
          return false;
        }
      },
      err => {
        return true;
      }


    );

    return true;



  }
}
