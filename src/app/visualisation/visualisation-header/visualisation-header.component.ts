import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-visualisation-header',
  templateUrl: './visualisation-header.component.html',
  styleUrls: ['./visualisation-header.component.css']
})
export class VisualisationHeaderComponent implements OnInit {

  private page : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {
    this.page = 0;
  }

   pageEvent(aj : boolean){
    this.page = 0;
  }

  nouveauSymptome(){
    this.page = 1;
  }

  parametrePatient(){
    alert("Fonctionnalite non disponible pour le moment");
  }

  retourMesPatients(){
    this.router.navigateByUrl('mesPatients');
    this.professionnelSanteService.setCurrentPatient(null);
  }

  deconnexion(){
      if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
        this.router.navigateByUrl('connexion');
        this.professionnelSanteService.setCurrentId("");
        this.professionnelSanteService.setCurrentPatient(null);
      } 
    
  }

}
