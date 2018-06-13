import { Symptome } from './symptome';

export class Patient {

    private numberP : number;
    private nom : string;
    private prenom : string;
    private dateDeNaissance : string;
    private alarmActivation : boolean;
    private idDispositif : string;
    private listSymptome : Symptome[];

    constructor(numberP : number, nom: string, prenom: string, dateDeNaissance : string, alarmActivation : boolean, idDispositif : string, listSymptome : Symptome[]){
        this.numberP = numberP; //numberPatient = nombre de patient total
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.alarmActivation = alarmActivation;
        this.listSymptome = listSymptome;
        this.idDispositif = idDispositif;
    }
    // get
    public getNumberP() : number{
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
    public getIdDispositif() : string{
        return this.idDispositif;
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
    public setIdDispositif(idDispositif : string){
        this.idDispositif = idDispositif;
    }
    public setListSymptome(listSymptom: Symptome[]) : Promise<void>{
        return new Promise((resolve) => {
            this.listSymptome = listSymptom;
            return resolve(null);
        });
    }

}
