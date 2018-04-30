import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptom } from '../model/symptom';

import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class WebApiService {

  private url: string = 'http://192.168.1.83:8080/api/webapi/patient';

  constructor(private http: Http) { }

  public connexion(id : string, pw : string): boolean{
    return true;
  }

  public getListPatient(id : string): Promise<Patient[]>{
    return new Promise((resolve, reject) => {
      alert(1);
      this.http.get(this.url)
      .subscribe(data => {
          let list: Patient[] = [];
          let res = data.json();
          console.log(data.json());
          let i = 0;
          while(res[i] != undefined){
            let patient = new Patient(res[i]["numberP"], res[i]["nom"], res[i]["prenom"],res[i]["dateDeNaissance"],res[i]["alarmActivation"],[]);
            list.push(patient);
            i = i + 1;
          }
          return resolve(list);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
    
    //return LISTPATIENT;
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
