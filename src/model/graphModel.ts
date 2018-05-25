export class GraphModel {

    private date : Date;
    private intensite : number;

    constructor(date : Date, intensite : number){
        this.date = date; 
        this.intensite = intensite;
    }
    // get
    public getDate() : Date{
        return this.date;
    }
    public getIntensite() : number{
        return this.intensite;
    }

    // set 
    public setDate(date : Date) : void{
        this.date = date;
    }
    public setIntensite(intensite : number) : void{
        this.intensite = intensite;
    }

}
