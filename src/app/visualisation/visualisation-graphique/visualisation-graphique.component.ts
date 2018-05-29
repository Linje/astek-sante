import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { GraphModel } from '../../../model/graphModel';

@Component({
  selector: 'app-visualisation-graphique',
  templateUrl: './visualisation-graphique.component.html',
  styleUrls: ['./visualisation-graphique.component.scss']
})
export class VisualisationGraphiqueComponent implements OnInit, OnChanges {
  @Input() symptome: Symptome;

private abscisse : Array<Date> = new Array();
private ordonnee : any[];//Array<number> = new Array();

private donnee : Array<GraphModel> = new Array();

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
    this.donnee = [];
   
    for(let v of this.symptome.getListValeur()){
      this.donnee.push(new GraphModel(v.getDate(), v.getIntensite()));
    }
  }

  public valuePlotBands: any[] = [{
    from: 24,
    to: 24,
    color: '#78d237',
    opacity: 0.2
}];
}
