import { Symptome } from './symptome';

export class Patient {

    private numberP : string;
    private nom : string;
    private prenom : string;
    private dateDeNaissance : string;
    private alarmActivation : boolean;
    private listSymptome : Symptome[];

    constructor(numberPatient : number, nom: string, prenom: string, dateDeNaissance : string, alarmActivation : boolean, listSymptome : Symptome[]){
        this.numberP = ""+numberPatient; //numberPatient = nombre de patient total
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.alarmActivation = alarmActivation;
        this.listSymptome = listSymptome;
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
    public getListSymptome() : Symptome[]{
        return this.listSymptome;
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
    public setListSymptome(listSymptom: Symptome[]){
        this.listSymptome = listSymptom;
    }

}
