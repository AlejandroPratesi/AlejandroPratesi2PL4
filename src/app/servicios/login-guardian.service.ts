import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate{

  constructor(private loginServicio: LoginService,private route:Router) {}

   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){

    if (this.loginServicio.isAutenticado) {
      return true;
    }else{
      this.route.navigate(['Login']);
      return false;
    }

   }

}
