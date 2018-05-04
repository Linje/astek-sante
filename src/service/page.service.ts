import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  private page : number;

  constructor() {
    this.page = 0;
   }

  public getPage() : number{
    return this.page;
  }
  public setPage(page : number){
    this.page = page;
  }

}
