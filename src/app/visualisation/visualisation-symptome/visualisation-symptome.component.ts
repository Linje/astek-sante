import { Component, OnInit, Input } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualisation-symptome',
  templateUrl: './visualisation-symptome.component.html',
  styleUrls: ['./visualisation-symptome.component.css']
})
export class VisualisationSymptomeComponent implements OnInit {
  @Input() symptome: Symptome;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {
  }

  deleteSymptome(s : Symptome){
    if(confirm("Etes vous sur de vouloir supprimer le symptome '' " + s.getNom() +" '' ?")) {
      this.professionnelSanteService.deleteSymptome(s.getNumberS()).then(() => {
        this.rechargerLaPage();
      });
    } 
  }

  rechargerLaPage(){
    this.professionnelSanteService.getListSymptomeWebApi().then((s)=>{
      this.professionnelSanteService.getCurrentPatient().setListSymptome(s);
      if(this.professionnelSanteService.getCurrentPatient().getListSymptome().length > 0){
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
