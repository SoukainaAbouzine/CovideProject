import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    // tslint:disable-next-line:triple-equals
    if (sessionStorage.getItem('isConnecte') == 'true') {
      return true;
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: '/contacts' }});
      return false;
    }
  }
}
