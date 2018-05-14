import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-mes-patients-ajout',
  templateUrl: './mes-patients-ajout.component.html',
  styleUrls: ['./mes-patients-ajout.component.css']
})
export class MesPatientsAjoutComponent implements OnInit {
 
  @Output() pageEvent = new EventEmitter<boolean>();
 
  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
  }

  ajouterUnPatient(nom : string, prenom : string, dateDeNaissance : string){
    //mettre un if de controles pour la date

    let nbr : number = this.professionnelSanteService.getListPatient().length + 1;
    let p : Patient = new Patient("p"+nbr, nom, prenom, dateDeNaissance, true, []);
    this.professionnelSanteService.addPatient(p).then(()=>{
      this.professionnelSanteService.getListPatientWebApi().then(data =>
      {
        alert("Patient ajouté");
        this.professionnelSanteService.setListPatient(data);     
      });  
      this.pageEvent.emit(true);
    });
  }

  annuler(){
    this.pageEvent.emit(false);
  }

}
