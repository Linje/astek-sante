import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
//import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptome } from '../model/symptome';
import { urlWebApi } from '../constante/urlWebApi';

import { Http, Headers, RequestOptions } from "@angular/http";
import { Valeur } from '../model/valeur';

@Injectable()
export class ProfessionnelSanteService {

  private currentId : string;
  private listPatient: Patient[];
  private currentPatient : Patient;

  constructor(private http: Http) {}

// Get

  public getListPatientWebApi(): Promise<Patient[]>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/"+ this.currentId)
      .subscribe(data => {
          let list: Patient[] = [];
          let res = data.json();
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

  
  public getListSymptomeWebApi() : Promise<Symptome[]>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/"+ this.currentId +"/"+ this.currentPatient.getNumberP())
      .subscribe(data => {
          let list: Symptome[] = [];
          let res = data.json();
          let i = 0;
          while(res[i] != undefined){
            let symptome = new Symptome(res[i]["numberS"], res[i]["nom"], res[i]["description"],res[i]["echelle"],[]);
            list.push(symptome);
            i = i + 1;
          }
          return resolve(list);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
  }

  public getListValeurWebApi(numberS : number) : Promise<Valeur[]>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/"+ this.currentId +"/"+ this.currentPatient.getNumberP()+"/"+numberS)
      .subscribe(data => {
          let list: Valeur[] = [];
          let res = data.json();
          let i = 0;
          while(res[i] != undefined){
            let valeur = new Valeur(res[i]["intensite"], new Date(res[i]["date"]));
            list.push(valeur);
            i = i + 1;
          }
          return resolve(list);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
  }
  
//Post

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
            //alert("Données envoyées");
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    });
  }

  public addSymptome(s : Symptome) : Promise<void>{
    //envoie des données au webService
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/" + this.currentId + "/" + this.currentPatient.getNumberP(),JSON.stringify(s), options)
        .subscribe(res => {
            //alert("Données envoyées");
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    });
  }


  //get & set
  public setCurrentId(id : string) : void{
    this.currentId = id;
  }

  public getCurrentId() : string{
    return this.currentId;
  }

  public setListPatient(listPatient : Patient[]) : void{
    this.listPatient = listPatient;
  }

  public getListPatient() : Patient[]{
    return this.listPatient;
  }

  public setCurrentPatient(p : Patient) : void{
    this.currentPatient = p;
  }

  public getCurrentPatient() : Patient{
    return this.currentPatient;
  }

}
