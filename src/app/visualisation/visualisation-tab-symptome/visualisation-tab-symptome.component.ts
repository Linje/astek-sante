import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Symptome } from '../../../model/symptome';

@Component({
  selector: 'app-visualisation-tab-symptome',
  templateUrl: './visualisation-tab-symptome.component.html',
  styleUrls: ['./visualisation-tab-symptome.component.css']
})
export class VisualisationTabSymptomeComponent implements OnInit {

  private symptomeSelectionne : Symptome;
  private switch : boolean;

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    this.switch = true;
    this.afficherSymptome(this.professionnelSanteService.getCurrentPatient().getListSymptome()[0]);
  }

  afficherSymptome(symptome : Symptome){
    this.symptomeSelectionne = symptome;
    this.switch = true;
  }

  afficherTousLesSymptomes(){
    this.switch = false;
  }

}
