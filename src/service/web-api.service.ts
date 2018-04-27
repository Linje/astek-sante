import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptom } from '../model/symptom';

import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class WebApiService {

  private url: string = 'http://localhost:8080/api/webapi/patient';

  constructor(private http: Http) { }

  public connexion(id : string, pw : string): boolean{
    return true;
  }

  public getListPatient(id : string): Patient[]{
    return LISTPATIENT;
  }

  public addPatient(p : Patient) : Promise<void>{
    //envoie des données au webService
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.url,JSON.stringify(p), options)
        .subscribe(res => {
            alert("Données envoyées");
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
  });
  }
  public changePatient(p : Patient) : boolean{
    return true;
  }

  public addSymptom(p : Patient, s : Symptom) : boolean{
    return true;
  }
  public changeSymptom(p : Patient, s : Symptom) : boolean{
    return true;
  }
  public deleteSymptom(p : Patient, numberS : string) : boolean{
    return true;
  }

}
