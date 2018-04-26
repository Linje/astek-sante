import { Injectable, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { WebApiService } from './web-api.service';

@Injectable()
export class ProfessionnelSanteService{
  
  private listPatient : Patient[];
  private currentPatient : Patient;

  constructor(private webApiService: WebApiService) { }

  public setListPatient(id : string, pw : string){
    this.listPatient = this.webApiService.getListPatient(id,pw);
  }

  public addPatient(p: Patient) : boolean{
    return true;
  }

}
