import { Injectable } from '@angular/core';
import { urlWebApi } from '../constante/urlWebApi';
import { Http } from "@angular/http";
import { ProfessionnelSanteService } from './professionnel-sante.service';

import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ConnexionService {

//-------test persistent login---------------
  isLoginId = new BehaviorSubject<string>(this.hasToken());
//---------------------------------------------

  constructor(private http: Http, private professionnelSanteService : ProfessionnelSanteService) { }

  public connect(id : string, psw : string): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/connection/"+ id + "/" + psw)
      .subscribe(data => {
          let b : boolean;
          if(data.text() === 'true'){
            b=true;
            this.professionnelSanteService.setCurrentId(id);
            
            //-----------------
            this.login(id);
            //-----------------

          }
          else b=false;;
          return resolve(b);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });   
  }

  //-------persistent login --------------

  private hasToken() : string {
    return localStorage.getItem('id');
  }
  public isLoggedIn() : Observable<string> {
    return this.isLoginId.asObservable();
  }
  public login(id : string) : void {
    localStorage.setItem('id', id);
    this.isLoginId.next(id); 
  }

  public deconnect(){
    localStorage.removeItem('id');
    this.isLoginId.next(null);
  }


}
