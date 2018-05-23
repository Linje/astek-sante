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
    this.abscisse = [];
    this.ordonnee = [];
    for(let v of this.symptome.getListValeur()){
      this.abscisse.push(v.getDate().toString());
      this.ordonnee.push(v.getIntensite());
    }
  }

  /*
  affichageDate(n : number) : string{
    let res : string;
    if(n < 10) res = "0"+ n;
    else res = ""+ n;
    return res;
  }
  */

}
