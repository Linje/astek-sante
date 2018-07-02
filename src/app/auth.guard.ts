import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';

import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private professionnelSanteService: ProfessionnelSanteService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.professionnelSanteService.getCurrentId() != null && this.professionnelSanteService.getCurrentId() != ''){
      return true
    }
    else{
      alert("Connectez-vous pour accéder à cette page");
      this.router.navigateByUrl("/connexion");
      return false;
    }
  }
}
