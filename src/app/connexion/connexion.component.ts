import { Component, OnInit} from '@angular/core';
import { ConnexionService } from '../../service/connexion.service';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private identifiant : string;
  private password : string;

  constructor(private connexionService : ConnexionService, private professionnelSanteService: ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {}

  connexion(id : string, psw : string){    
    this.connexionService.connect(id,psw)
    .then(res => {
      if(res){
        this.professionnelSanteService.setCurrentId(id);
        this.professionnelSanteService.getListPatientWebApi().then(data =>
        {
           this.professionnelSanteService.setListPatient(data);
        });
        this.router.navigateByUrl('/mesPatients');
        //this.pageService.setPage(1);
      }
      else{
        alert("identifiant ou mot de passe incorrect");
      }
    });
  }

}
