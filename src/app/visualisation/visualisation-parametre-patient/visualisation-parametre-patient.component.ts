import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Patient } from '../../../model/patient';

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

  modifierPatient(nom : string, prenom : string, dateDeNaissance : string, idDispositif : string){
    if(nom == "") nom = this.professionnelSanteService.getCurrentPatient().getNom();
    if(prenom == "") prenom = this.professionnelSanteService.getCurrentPatient().getPrenom();
    if(dateDeNaissance == "") dateDeNaissance = this.professionnelSanteService.getCurrentPatient().getDateDeNaissance();
    if(idDispositif == "") idDispositif = this.professionnelSanteService.getCurrentPatient().getIdDispositif();
    let alarmeActive : boolean;
    if(this.alarm == 1) alarmeActive = true;
    else alarmeActive = false;

    let p: Patient = new Patient(this.professionnelSanteService.getCurrentPatient().getNumberP(), nom, prenom, dateDeNaissance, alarmeActive, idDispositif, null);

    this.professionnelSanteService.updatePatient(p).then(()=>{
      this.professionnelSanteService.getListPatientWebApi().then(data =>
        {
          alert("Patient modifié");
          this.professionnelSanteService.setListPatient(data); 
          let i = 0;
          while(this.professionnelSanteService.getCurrentPatient().getNumberP() != this.professionnelSanteService.getListPatient()[i].getNumberP()){
            i++
          }   
          this.professionnelSanteService.setCurrentPatient(this.professionnelSanteService.getListPatient()[i]);
        });  
        this.pageEvent.emit(true);
    });
  }
}
