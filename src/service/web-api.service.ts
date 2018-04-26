import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LISTPATIENT } from '../mock/mockListPatient';
import { Symptom } from '../model/symptom';

@Injectable()
export class WebApiService {

  constructor() { }

  public connexion(id : string, pw : string): boolean{
    return true;
  }

  public getListPatient(id : string, pw : string): Patient[]{
    return LISTPATIENT;
  }

  public addPatient(p : Patient) : boolean{
    return true;
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
