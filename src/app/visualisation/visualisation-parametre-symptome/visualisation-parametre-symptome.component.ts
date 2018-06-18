import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-parametre-symptome',
  templateUrl: './visualisation-parametre-symptome.component.html',
  styleUrls: ['./visualisation-parametre-symptome.component.scss']
})
export class VisualisationParametreSymptomeComponent implements OnInit {
  @Input() symptome: Symptome;
  @Output() pageEvent = new EventEmitter<boolean>();
  
  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
  }

  annuler(){
    this.pageEvent.emit(false);
  }

  modifierUnSymptome(nom : string, description : string, echelle1 : number, echelle2 : number){
    if(nom == "") nom = this.symptome.getNom();
    if(description == "") description = this.symptome.getDescription();

    let echelleString1 = "" + echelle1;
    let echelleString2 = "" + echelle2;
    if(echelleString1 == "") echelle1 = this.symptome.getEchelle()[0];
    if(echelleString2 == "") echelle2 = this.symptome.getEchelle()[1];

    this.professionnelSanteService.updateSymptome(new Symptome(this.symptome.getNumberS(),
    nom, description,[echelle1,echelle2],null)).then(()=>{
      this.pageEvent.emit(true); 
      alert("Symptome modifié");     
    });  
  }

}
