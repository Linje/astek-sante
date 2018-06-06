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
  private switch : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    if(this.professionnelSanteService.getCurrentPatient().getListSymptome().length > 0){
      this.switch = 1;
      this.afficherSymptome(this.professionnelSanteService.getCurrentPatient().getListSymptome()[0]);
    }
    else this.switch = 3;
  }

  afficherSymptome(symptome : Symptome){
    this.symptomeSelectionne = symptome;
    this.switch = 1;
  }

  afficherTousLesSymptomes(){
    this.switch = 2;
  }

  deleteEvent(d: boolean){
    if(this.professionnelSanteService.getCurrentPatient().getListSymptome().length > 0){
      this.switch = 1;
      this.afficherSymptome(this.professionnelSanteService.getCurrentPatient().getListSymptome()[0]);
    }
    else this.switch = 3;
  }
}
