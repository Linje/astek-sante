import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Patient } from '../../../model/patient';

@Component({
  selector: 'app-mes-patients-ajout',
  templateUrl: './mes-patients-ajout.component.html',
  styleUrls: ['./mes-patients-ajout.component.css']
})
export class MesPatientsAjoutComponent implements OnInit {
 
  @Output() pageEvent = new EventEmitter<boolean>();
  private alarme : string;
  private alarmeButton : string;
  private classAlarmeButton : string;
 
  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    this.alarme = "Activé";
    this.alarmeButton = "Désactivé"; 
    this.classAlarmeButton = "btn btn-outline-danger btn-sm";
  }

  changerAlarme(){
    switch(this.alarme) { 
      case "Activé": { 
        this.alarme = "Désactivé";
        this.alarmeButton = "Activé";
        this.classAlarmeButton = "btn btn-outline-success btn-sm";
        break; 
      } 
      case "Désactivé": { 
        this.alarme = "Activé";
        this.alarmeButton = "Désactivé"; 
        this.classAlarmeButton = "btn btn-outline-danger btn-sm"; 
        break; 
      }  
      default: { 
         console.log("Invalid choice"); 
         break;              
      } 
   }  
  } 


  ajouterUnPatient(nom : string, prenom : string, dateDeNaissance : string){
    //mettre un if de controles pour la date

    let nbr : number = this.professionnelSanteService.getListPatient().length + 1;
    let alarmeActive : boolean;
    if(this.alarme == "Activé") alarmeActive = true;
    else alarmeActive = false;
    let p : Patient = new Patient("p"+nbr, nom, prenom, dateDeNaissance, alarmeActive, []);
    
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
