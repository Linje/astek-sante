import { Valeur } from './valeur';

export class Symptome {
    private numberS : string;
    private nom : string;
    private description : string;
    private echelle : number[];
    private listValeur : Valeur[];

    constructor(numberSymptom : number, nom : string, description : string, echelle : number[], listValeur : Valeur[]){
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
    public getListValeur() : Valeur[]{
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
    public setListValeur(listValeur: Valeur[]){
        this.listValeur = listValeur;
    }
}
