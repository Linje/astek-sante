import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-graphique-tous-les-symptomes',
  templateUrl: './visualisation-graphique-tous-les-symptomes.component.html',
  styleUrls: ['./visualisation-graphique-tous-les-symptomes.component.scss']
})
export class VisualisationGraphiqueTousLesSymptomesComponent implements OnInit {

  


/*
  private abscisse : Array<string> = new Array();

  years: Array<Number> = [2012, 2013, 2014, 2015];
  students = [
    {
      name : 'Paul',
      results : [90, 77, 34, 30]
    },
    {
      name : 'Katie',
      results : [80, 21, 14, 30]
    },
    {
      name : 'Dave',
      results : [20, 77, 64, 30]
    },
    {
      name : 'Sarah',
      results : [70, 76, 94, 10]
    }
  ];
*/ 
  
  constructor(private professionnelSanteService : ProfessionnelSanteService) {}

  ngOnInit() {
    /*let listDate: Array<Date> = new Array();
    for(let s of this.professionnelSanteService.getCurrentPatient().getListSymptome()){
      for(let v of s.getListValeur()){
        
      }
    }
    */
  }

}
