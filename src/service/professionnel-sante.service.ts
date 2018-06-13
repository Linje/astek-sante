import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';

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
            let patient = new Patient(res[i]["numberP"], res[i]["nom"], res[i]["prenom"],res[i]["dateDeNaissance"],res[i]["alarmActivation"],res[i]["idDispositif"],[]);
            list.push(patient);
            i = i + 1;
          }
          return resolve(list);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
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

  public getSymptomeAndValeurWebApi() : Promise<void>{
    return new Promise((resolve)=>{
      this.getListSymptomeWebApi().then((s)=>{
        this.currentPatient.setListSymptome(s).then(()=>{
          if(this.currentPatient.getListSymptome().length != 0){
            for(let s of this.currentPatient.getListSymptome()){
              this.getListValeurWebApi(s.getNumberS()).then((v)=>{
                  s.setListValeur(v).then(()=>{
                    if(s.getNumberS() == this.currentPatient.getListSymptome()[this.currentPatient.getListSymptome().length-1].getNumberS()){
                      resolve(null);
                    }
                  });
              });
            }
          }
          else resolve(null);
        });
      });
    });
  }
  
//Post

private headers = new Headers(
  {
    'Content-Type' : 'application/json'
  });
private options = new RequestOptions({ headers: this.headers });

  public addPatient(p : Patient) : Promise<void>{
    //envoie des données au webService

    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/" + this.currentId,JSON.stringify(p), this.options)
        .subscribe(res => {
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    });
  }

  public addSymptome(s : Symptome) : Promise<void>{
    //envoie des données au webService

    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/" + this.currentId + "/" + this.currentPatient.getNumberP(),JSON.stringify(s), this.options)
        .subscribe(res => {
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    });
  }

  public addValeur(v : Valeur, numberS : number) : Promise<void>{

    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/valeur/" + numberS, JSON.stringify(v), this.options)
        .subscribe(res => {
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    });
  }


//DELETE

public deletePatient(numberP : number) : Promise<void>{
  //envoie des données au webService

  return new Promise((resolve, reject) => {
    this.http.delete(urlWebApi + "/" + numberP, this.options)
      .subscribe(res => {
          return resolve(null);
     }, (err) => {
       alert(err);
      reject(err);
    });
  });
}

public deleteSymptome(numberS : number) : Promise<void>{
  //envoie des données au webService

  return new Promise((resolve, reject) => {
    this.http.delete(urlWebApi + "/symptome/" + numberS, this.options)
      .subscribe(res => {
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
