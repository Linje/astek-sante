export class Valeur2 {
    private intensite : string;
    private date : number;


    constructor(intensite : string, date : number){
        this.intensite = intensite;
        this.date = date;
    }

    // get
    public getIntensite() : string{
        return this.intensite;
    }
    public getDate() : number{
        return this.date;
    }
    // set
    public setIntensite(intensite : string){
        this.intensite = intensite;
    }
    public setDate(date : number){
        this.date = date;
    }
}

