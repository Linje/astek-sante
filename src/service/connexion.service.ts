/*
Ce service permet de vérifier l'identité de l’utilisateur. L’identifiant (id) et le mot de passe (psw) envoyés sont comparés 
avec ceux de la base de données. Le boolean renvoyé indique si les identifiants et mots de passes sont correct ou incorrect (true ou false).
*/

import { Injectable } from '@angular/core';
import { urlWebApi } from '../constante/urlWebApi';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ProfessionnelSanteService } from './professionnel-sante.service';

@Injectable()
export class ConnexionService {

  private log : boolean;

  constructor(private http: Http, private professionnelSanteService : ProfessionnelSanteService) { 
    this.log = false;
  }

  

  public connect(id : string, psw : string): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/connection/"+ id + "/" + psw)
      .subscribe(data => {
          //let b : boolean;
          if(data.text() === 'true'){
             //b=true;
             this.log = true;
             this.professionnelSanteService.setCurrentId(id);
          }
          else this.log = false;//b=false;;
          //return resolve(b);
          return resolve(this.log);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });   
  }
}
