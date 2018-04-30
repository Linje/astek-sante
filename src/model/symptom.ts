import { Value } from './value';

export class Symptom {
    private numberS : string;
    private nom : string;
    private description : string;
    private echelle : number[];
    private listValeur : Value[];

    constructor(numberSymptom : number, nom : string, description : string, echelle : number[], listValeur : Value[]){
        this.numberS = "s" + numberSymptom + 1;
        this.nom = nom;
        this.description = description;
        this.echelle = echelle;
        this.listValeur = listValeur;
    }
    // get
    public getNumberS() : string{
        return this.numberS;
    }
    public getNom() : string{
        return this.nom;
    }
    public getDescription() : string{
        return this.description;
    }
    public getEchelle() : number[]{
        return this.echelle;
    }
    public getListValeur() : Value[]{
        return this.listValeur;
    }

    // set (sauf de numberS)
    public setNom(nom: string){
        this.nom = nom;
    }
    public setDescription(description: string){
        this.description = description;
    }
    public setEchelle(echelle: number[]){
        this.echelle = echelle;
    }
    public setListValeur(listValeur: Value[]){
        this.listValeur = listValeur;
    }
}
