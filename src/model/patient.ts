import { Symptom } from './symptom';

export class Patient {

    private numberP : string;
    private nom : string;
    private prenom : string;
    private dateDeNaissance : string;
    private alarmActivation : boolean;
    private listSymptom : Symptom[];

    constructor(numberPatient : number, nom: string, prenom: string, dateDeNaissance : string, alarmActivation : boolean, listSymptom : Symptom[]){
        this.numberP = "p" + numberPatient + 1; //numberPatient = nombre de patient total
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.alarmActivation = alarmActivation;
        this.listSymptom = listSymptom;
    }
    // get
    public getNumberP() : string{
        return this.numberP;
    }
    public getNom() : string{
        return this.nom;
    }
    public getPrenom() : string{
        return this.prenom;
    }
    public getDateDeNaissance() : string{
        return this.dateDeNaissance;
    }
    public getAlarmActivation() : boolean{
        return this.alarmActivation;
    }
    public getListSymptom() : Symptom[]{
        return this.listSymptom;
    }

    // set (sauf de numberP)
    public setNom(nom: string){
        this.nom = nom;
    }
    public setPrenom(prenom: string){
        this.prenom = prenom;
    }
    public setDateDeNaissance(dateDeNaissance: string){
        this.dateDeNaissance =  dateDeNaissance;
    }
    public setAlarmActivation(alarmActivation: boolean){
        this.alarmActivation = alarmActivation;
    }
    public setListSymptom(listSymptom: Symptom[]){
        this.listSymptom = listSymptom;
    }

}
