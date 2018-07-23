import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-nouveau-symptome',
  templateUrl: './visualisation-nouveau-symptome.component.html',
  styleUrls: ['./visualisation-nouveau-symptome.component.scss']
})
export class VisualisationNouveauSymptomeComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<boolean>();
  
  constructor(public professionnelSanteService: ProfessionnelSanteService) { }

  ngOnInit() {}

  ajouterUnSymptome(nom : string, description : string, echelle1 : number, echelle2 : number){
    // peut importe la valeur du numberS, elle va être remplacer dans la base de donnée (auto-incrément)
    let s : Symptome = new Symptome(1,nom,description,[echelle1,echelle2],null);
    this.professionnelSanteService.addSymptome(s).then(() => {
      this.professionnelSanteService.getListSymptomeWebApi().then(data => {
        this.professionnelSanteService.getCurrentPatient().setListSymptome(data);
      });
      this.pageEvent.emit(false);
    });
    
  }

  annuler(){
    this.pageEvent.emit(false);
  }

}
