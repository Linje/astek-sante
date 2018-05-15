import { Component, OnInit} from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Patient } from '../../../model/patient';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'app-mes-patients-liste',
  templateUrl: './mes-patients-liste.component.html',
  styleUrls: ['./mes-patients-liste.component.css']
})
export class MesPatientsListeComponent implements OnInit{
 
  constructor(private professionnelSanteService : ProfessionnelSanteService, private pageService : PageService) { }

  ngOnInit() {}

  clickPatient(p: Patient){
    this.professionnelSanteService.setCurrentPatient(p);
    this.professionnelSanteService.getListSymptomeWebApi().then((s)=>{
      this.professionnelSanteService.getCurrentPatient().setListSymptome(s);
      this.pageService.setPage(2);
    });
    
  }
}
