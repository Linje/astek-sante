/*
Ce service donne accès aux méthodes permettant d’accéder et d’ajouter/supprimer les patients et les symptômes. Il représente le 
lien entre l’application Web et l’API Web. Ses attributs indiquent qui est l’utilisateur actuel (currentId) et sur quel patient 
l’utilisateur a décidé de s'intéresser (currentPatient). L’attribut listPatient permet d’éviter à l’application de devoir recharger la 
liste des patients de la base de données à chaque fois qu’elle doit y accéder.
*/

import { Injectable } from '@angular/core';

import { Patient } from '../model/patient';
import { Symptome } from '../model/symptome';
import { Valeur } from '../model/valeur';
import { Valeur2 } from '../model/valeur2';

import { urlWebApi } from '../constante/urlWebApi';

import { Http, Headers, RequestOptions } from "@angular/http";


@Injectable()
export class ProfessionnelSanteService {

  private currentId : string;
  private listPatient: Patient[];
  private currentPatient : Patient;

  private listNomSymptome : string[];

  constructor(private http: Http){}

// Get
/*
Cette méthode envoie une requête GET à l’API web et récupère la liste des noms des symptomes disponibles
*/
public getListNomSymptomeWebApi(): Promise<string[]>{
  return new Promise((resolve, reject) => {
    this.http.get(urlWebApi+"/listNomSymptome")
    .subscribe(data => {
        let list: string[] = [];
        let res = data.json();
        let i = 0;
        while(res[i] != undefined){
          list.push(res[i]["nom"]);
          alert(res[i]["nom"])
          i = i + 1;
        }
        return resolve(list);
       }, (err) => {
         alert(err);
           reject(err);
       });
    });
}

/*
Cette méthode envoie une requête GET à l’API web et récupère la liste de patients associée à 
l’identifiant du professionnel de santé connecté (attribut “currentId”).
*/
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

/*
Cette fonction envoie une requête GET à l’API web et récupère la liste de symptômes associée 
au patient sélectionné (attribut “currentPatient”).
*/
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

/*
Cette fonction envoie une requête GET à l’API web et récupère la liste de valeur associée au 
symptôme sélectionné (numberS = nombre unique d’identification d’un symptôme).
*/
  public getListValeurWebApi(numberS : number) : Promise<Valeur[]>{
    return new Promise((resolve, reject) => {
      this.http.get(urlWebApi+"/"+ this.currentId +"/"+ this.currentPatient.getNumberP()+"/"+numberS)
      .subscribe(data => {
          let list: Valeur[] = [];
          let res = data.json();
          let i = 0;
          while(res[i] != undefined){
            let v = new Valeur(res[i]["intensite"], new Date(res[i]["date"]));
            //adapter la date au fuseau horaire (JSON.stringify() ne le prend pas en compte)
            v.getDate().setHours(v.getDate().getHours() - v.getDate().getTimezoneOffset() / 60);
            list.push(v);
            i = i + 1;
          }
          return resolve(list);
         }, (err) => {
           alert(err);
             reject(err);
         });
      });
  }

/*
Cette fonction utilise “getListSymptomeWebApi” et “getListValeurWebApi” pour obtenir puis enregistrer 
dans le patient sélectionné (attribut “currentPatient”) sa liste de symptômes avec pour chaque symptôme leur liste de valeurs associée.
*/
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

/*
Cette fonction envoie une requête POST à l’API web pour ajouter un patient au professionnel de santé 
connecté (attribut “currentId”).
*/
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

/*
Cette fonction envoie une requête POST à l’API web pour ajouter un symptôme (Symptome s) au patient sélectionné 
(attribut “currentPatient”).
*/
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

/*
Cette fonction envoie une requête POST à l’API web pour ajouter une Valeur (Valeur v) au symptôme sélectionné (“numberS”).
*/
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

  //-------test callback------------
  public addValeur2() : Promise<void>{
    let time = new Date();
    let v : Valeur2 = new Valeur2("060a", time.getTime());
    return new Promise((resolve, reject) => {
      this.http.post(urlWebApi + "/valeur/dispositif/1D2396", JSON.stringify(v), this.options)
        .subscribe(res => {
          alert(res);
            return resolve(null);
       }, (err) => {
         alert(err);
        reject(err);
      });
    }); 
  }
  //-------------------------------

//DELETE

/*
Cette fonction envoie une requête DELETE à l’API web pour supprimer un patient (Patient p) au professionnel de santé 
connecté (attribut “currentId”).
*/
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

/*
Cette fonction envoie une requête DELETE à l’API web pour supprimer un symptôme (Symptome s) au patient connecté (attribut “currentPatient”).
*/
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

//UPDATE
/*
Cette fonction envoie une requête UPDATE à l’Api web pour modifier les informations d’un patient.
*/
public updatePatient(p : Patient) : Promise<void>{
  return new Promise((resolve, reject) => {
    this.http.put(urlWebApi + "/update/" + this.currentId, JSON.stringify(p), this.options)
      .subscribe(res => {
          return resolve(null);
     }, (err) => {
       alert(err);
      reject(err);
    });
  });
}

/*
Cette fonction envoie une requête UPDATE à l’Api web pour modifier les informations d’un symptôme.
*/
public updateSymptome(s : Symptome) : Promise<void>{
  return new Promise((resolve, reject) => {
    this.http.put(urlWebApi + "/update/" + this.currentId + "/" + this.currentPatient.getNumberP(), JSON.stringify(s), this.options)
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

  public setListNomSymptome(listNomSymptome : string[]) : void{
    this.listNomSymptome = listNomSymptome;
  }
  
  public getListNomSymptome() : string[]{
    return this.listNomSymptome;
  }


}
