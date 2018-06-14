import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-parametre-patient',
  templateUrl: './visualisation-parametre-patient.component.html',
  styleUrls: ['./visualisation-parametre-patient.component.scss']
})
export class VisualisationParametrePatientComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<boolean>();

  private alarm:number;

  constructor(private professionnelSanteService: ProfessionnelSanteService) { }

  ngOnInit() {
    if(this.professionnelSanteService.getCurrentPatient().getAlarmActivation()){
      this.alarm = 1;
    }
    else this.alarm = 2;
    
  }

  annuler(){
    this.pageEvent.emit(false);
  }

  modifierPatient(){
    alert("yes!");
  }
}
