import { Component, OnInit} from '@angular/core';
import { ConnexionService } from '../../service/connexion.service';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';

import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private identifiant : string;
  private password : string;

  constructor(private connexionService : ConnexionService, private professionnelSanteService: ProfessionnelSanteService,
    private router: Router, private progressService : NgProgress) { }

  ngOnInit() {}

  connexion(id : string, psw : string){
    this.progressService.start()
    this.connexionService.connect(id,psw)
    .then(res => {
      if(res){
        this.professionnelSanteService.setCurrentId(id);
        this.router.navigateByUrl('/mesPatients');
      }
      else{
        alert("identifiant ou mot de passe incorrect");
        this.progressService.done();
      } 
    });
  }

  accueil(){
    //----------
    //this.professionnelSanteService.addValeur2();
    //----------
    this.router.navigateByUrl('/accueil');
  }

}
