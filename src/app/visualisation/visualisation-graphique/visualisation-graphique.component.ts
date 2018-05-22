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

private abscisse : Array<string> = new Array();
private ordonnee : Array<number> = new Array();

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['symptome']){
      if(this.symptome != undefined){
        this.initialiserGraph();
      }
    }
  }

  initialiserGraph(){
    alert("visualisation graphique : " +this.symptome.getListValeur());
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
