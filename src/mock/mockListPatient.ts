import { Patient } from "../model/patient";
import { Symptom } from "../model/symptom";
import { Valeur } from "../model/valeur";

export const LISTPATIENT:Patient[]=[new Patient(0,"billy","joe","12/01/1996", true, [new Symptom(0,"douleur","douleur à la jambe",[0,10],[])])];