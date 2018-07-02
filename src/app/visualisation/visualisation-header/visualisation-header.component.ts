import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

import { Router } from '@angular/router';

import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-visualisation-header',
  templateUrl: './visualisation-header.component.html',
  styleUrls: ['./visualisation-header.component.css']
})
export class VisualisationHeaderComponent implements OnInit {
  
  private page : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router, private progressService : NgProgress) { }

  ngOnInit() {
    this.progressService.start();
    if(this.professionnelSanteService.getCurrentPatient()==null){
      this.router.navigateByUrl('/mesPatients');
    }
    this.page = 0;
  }

   pageEvent(aj : boolean){
    this.page = 0;
  }

  nouveauSymptome(){
    this.page = 1;
  }

  parametrePatient(){
    this.page = 2;
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
