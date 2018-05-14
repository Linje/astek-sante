import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
//import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptome } from '../model/symptome';
import { urlWebApi } from '../mock/urlWebApi';

import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ProfessionnelSanteService {

  private currentId : string;
  private listPatient: Patient[];
  private currentPatient : Patient;

  constructor(private http: Http) {}


  public getListPatientWebApi(): Promise<Patient[]>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/"+ this.currentId)
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
    
    //return LISTPATIENT --> pour le Test;
  }

  public addPatient(p : Patient) : Promise<void>{
    //this.currentId = "pf2_id"; // JUSTE POUR LE TEST

    //envoie des données au webService
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/" + this.currentId,JSON.stringify(p), options)
        .subscribe(res => {
            alert("Données envoyées");
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
  });
  }

  public setCurrentId(id : string) : void{
    this.currentId = id;
  }

  public getCurrentId() : string{
    return this.currentId;
  }

  public setListPatient(listPatient : Patient[]){
    this.listPatient = listPatient;
  }

  public getListPatient() : Patient[]{
    return this.listPatient;
  }

}
