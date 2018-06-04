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
    this.professionnelSanteService.getListSymptomeWebApi().then((s)=>{
      this.professionnelSanteService.getCurrentPatient().setListSymptome(s);
      if(this.professionnelSanteService.getCurrentPatient().getListSymptome().length != 0){
        for(let s of this.professionnelSanteService.getCurrentPatient().getListSymptome()){
          this.professionnelSanteService.getListValeurWebApi(s.getNumberS()).then((v)=>{
              s.setListValeur(v).then(()=>{
                if(s.getNumberS() == this.professionnelSanteService.getCurrentPatient()
                .getListSymptome()[this.professionnelSanteService.getCurrentPatient().getListSymptome().length-1].getNumberS()){
                  this.router.navigateByUrl('mesPatients/visualisation'); 
                }
            });
          });
        }
      }
      else this.router.navigateByUrl('mesPatients/visualisation');
      
    });
}

}