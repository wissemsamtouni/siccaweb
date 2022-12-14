import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'  
})
export class ClientGuard implements CanActivate {
  constructor(  private router: Router, private http: HttpClient) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    this.http.get('http://localhost:5000/utilisateurs/afficheruser', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res);
        if (res.role === 'client') {
          console.log('client vvvvvvvv');
          return true;
        }else {
          this.router.navigate(['/auth/login']);
          return false;
        }
      },
      err => {
        this.router.navigate(['/auth/login']);
        return false;
      }
    );

    return true;



  }

}
