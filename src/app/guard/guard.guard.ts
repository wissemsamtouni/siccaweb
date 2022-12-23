import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     this.http.get<any>('http://localhost:5000/utilisateurs/afficheruser', {withCredentials: true}).subscribe(
      {
        next: (res: any) => {
          if (res.role == 'admin') {

            return true;
          } else {

            this.router.navigate(['/auth/login']);
            return false;
          }
        }
        ,
        error: (err) => {

          this.router.navigate(['/auth/login']);
          return false;
        }
      }
    );

    return true;


  }

}
