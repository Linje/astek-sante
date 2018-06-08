import { Component, OnInit} from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Patient } from '../../../model/patient';

import { Router } from '@angular/router';
import { VisualisationGraphiqueComponent } from '../../visualisation/visualisation-graphique/visualisation-graphique.component';

@Component({
  selector: 'app-mes-patients-liste',
  templateUrl: './mes-patients-liste.component.html',
  styleUrls: ['./mes-patients-liste.component.css']
})
export class MesPatientsListeComponent implements OnInit{
 
  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {}

  clickPatient(p: Patient){
    this.professionnelSanteService.setCurrentPatient(p);
    this.router.navigateByUrl('mesPatients/visualisation');
  }

  deletePatient(p: Patient){
    if(confirm("Etes vous sur de vouloir supprimer '' " + p.getNom() + " " + p.getPrenom() + " '' de vos patient ?")) {
      this.professionnelSanteService.deletePatient(p.getNumberP()).then(() => {
      this.professionnelSanteService.getListPatientWebApi().then(data =>
        {
           this.professionnelSanteService.setListPatient(data);
        });
      });
    } 
    
  }

}