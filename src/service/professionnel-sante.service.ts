import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptome } from '../model/symptome';

import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ProfessionnelSanteService {

  private url: string = 'http://localhost:8080/api/webapi/professional';

  private currentId : string;
  private listPatient: Patient[];
  private currentPatient : Patient;

  constructor(private http: Http) {}

  public connexion(id : string, pw : string): boolean{
    return true;
  }

  public getListPatient(id : string): Promise<Patient[]>{
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"/"+ id)
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
    this.currentId = "pf1_id"; // JUSTE POUR LE TEST

    //envoie des données au webService
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + this.currentId,JSON.stringify(p), options)
        .subscribe(res => {
            alert("Données envoyées");
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
  });
  }

}
