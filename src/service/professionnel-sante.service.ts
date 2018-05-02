import { Injectable, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { WebApiService } from './web-api.service';

@Injectable()
export class ProfessionnelSanteService{
  
  private currentId : string;
  private listPatient : Patient[];
  private currentPatient : Patient;

  constructor(private webApiService: WebApiService) {}

  public setListPatient(id : string, pw : string){
    this.webApiService.getListPatient(id).then((list)=> {
      this.listPatient = list;
    });
  }

  public addPatient(p: Patient) : Promise<void>{
    return new Promise<void>(resolve => {
      this.webApiService.addPatient(p).then(() => {
          this.listPatient.push(p);
      }).catch(e => alert(e));
  });
  }

}
