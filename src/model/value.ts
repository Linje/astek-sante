export class Value {
    private intensite : number;
    private date : Date;

    constructor(intensite : number, date : Date){
        this.intensite = intensite;
        this.date = date;
    }

    // get
    public getIntensite() : number{
        return this.intensite;
    }
    public getDate() : Date{
        return this.date;
    }
    // set
    public setIntensite(intensite : number){
        this.intensite = intensite;
    }
    public setDate(date : Date){
        this.date = date;
    }
}

