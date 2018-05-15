import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Symptome } from '../../../model/symptome';

@Component({
  selector: 'app-visualisation-tab-symptome',
  templateUrl: './visualisation-tab-symptome.component.html',
  styleUrls: ['./visualisation-tab-symptome.component.css']
})
export class VisualisationTabSymptomeComponent implements OnInit {

  private listSymptom : Symptome[];

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    this.listSymptom = this.professionnelSanteService.getCurrentPatient().getListSymptome();
  }



}
