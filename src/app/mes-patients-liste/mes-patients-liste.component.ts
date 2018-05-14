import { Component, OnInit} from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-mes-patients-liste',
  templateUrl: './mes-patients-liste.component.html',
  styleUrls: ['./mes-patients-liste.component.css']
})
export class MesPatientsListeComponent implements OnInit{

  private listPatient: Patient[];
 
  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    this.professionnelSanteService.getListPatientWebApi().then(data =>
      {
        alert("list");
         this.professionnelSanteService.setListPatient(data);
         this.listPatient = this.professionnelSanteService.getListPatient();
      });
  }
}
