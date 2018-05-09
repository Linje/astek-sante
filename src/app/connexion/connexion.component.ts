import { Component, OnInit} from '@angular/core';
import { PageService } from '../../service/page.service';
import { ConnexionService } from '../../service/connexion.service';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private identifiant : string;
  private password : string;

  constructor(private connexionService : ConnexionService, private professionnelSanteService: ProfessionnelSanteService, private pageService:PageService) { }

  ngOnInit() {}

  connexion(id : string, psw : string){    
    this.connexionService.connect(id,psw)
    .then(res => {
      if(res){
        this.professionnelSanteService.setCurrentId("pf1_id");
        this.professionnelSanteService.getListPatientWebApi().then(data =>
        {
           this.professionnelSanteService.setListPatient(data);
        });
        this.pageService.setPage(1); 
        alert("connecté")
      }
      else{
        alert("identifiant ou mot de passe incorrect");
      }
    });
  }

}
