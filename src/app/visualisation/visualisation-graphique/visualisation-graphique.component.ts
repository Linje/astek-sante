import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-graphique',
  templateUrl: './visualisation-graphique.component.html',
  styleUrls: ['./visualisation-graphique.component.scss']
})
export class VisualisationGraphiqueComponent implements OnInit, OnChanges {
  @Input() symptome: Symptome;
/*
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

private abscisse : Array<string> = new Array();
private ordonnee : Array<number> = new Array();

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['symptome']){
      if(this.symptome != undefined){
        this.initialiserGraph();
      }
    }
  }

  initialiserGraph(){
    this.abscisse = [];
    this.ordonnee = [];
    for(let v of this.symptome.getListValeur()){
      this.abscisse.push(this.affichageDate(v.getDate().getDay()) + "/" + 
      this.affichageDate(v.getDate().getMonth()) + "-" + this.affichageDate(v.getDate().getHours())+ ":" 
      + this.affichageDate(v.getDate().getMinutes()));

      this.ordonnee.push(v.getIntensite());
    }
  }

  affichageDate(n : number) : string{
    let res : string;
    if(n < 10) res = "0"+ n;
    else res = ""+ n;
    return res;
  }

}
