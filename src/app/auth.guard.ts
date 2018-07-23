import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';

import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private professionnelSanteService: ProfessionnelSanteService, 
    private router: Router, private connexionService : ConnexionService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let b : string;
    this.connexionService.isLoggedIn().subscribe(val => b=val);
    
    if(b!=null){
      return true;
    }
    else{
      alert("Connectez-vous pour accéder à cette page");
      this.router.navigateByUrl("/connexion");
      return false;
    }
  }
}
