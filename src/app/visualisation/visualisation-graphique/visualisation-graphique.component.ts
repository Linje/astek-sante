import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Valeur } from '../../../model/valeur';

@Component({
  selector: 'app-visualisation-graphique',
  templateUrl: './visualisation-graphique.component.html',
  styleUrls: ['./visualisation-graphique.component.scss']
})
export class VisualisationGraphiqueComponent implements OnInit, OnChanges {
  @Input() symptome: Symptome;

private donnee : Array<Valeur> = new Array();

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
    this.donnee = this.symptome.getListValeur();
  }

  //---afficher une bare vertical---
  /*public valuePlotBands: any[] = [{
    from: 24,
    to: 24,
    color: '#78d237',
    opacity: 0.2
  }];
  --------------------------*/
}
