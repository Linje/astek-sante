import { Injectable } from '@angular/core';
import { urlWebApi } from '../mock/urlWebApi';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ProfessionnelSanteService } from './professionnel-sante.service';

@Injectable()
export class ConnexionService {

  constructor(private http: Http, private professionnelSanteService : ProfessionnelSanteService) { }

  public connect(id : string, psw : string): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/connection/"+ id + "/" + psw)
      .subscribe(data => {
          let b : boolean;
          if(data.text() === 'true'){
             b=true;
             this.professionnelSanteService.setCurrentId(id);
          }
          else b=false;;
          return resolve(b);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
  }

}
