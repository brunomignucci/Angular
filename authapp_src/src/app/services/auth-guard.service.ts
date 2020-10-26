import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AutenticacionService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
    if(this.auth.isAuthenticated$)
    {
      console.log("Paso el guard");
      return true;
    }
    else{
      console.error("Bloqueado por el guard");
      return false;
    }
  }
}
