import { Patient } from "../model/patient";
import { Symptome } from "../model/symptome";
import { Valeur } from "../model/valeur";

export const LISTPATIENT:Patient[]=[new Patient("p0","billy","joe","12/01/1996", true, [new Symptome("s0","douleur","douleur à la jambe",[0,10],[])])];