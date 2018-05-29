import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'app-visualisation-header',
  templateUrl: './visualisation-header.component.html',
  styleUrls: ['./visualisation-header.component.css']
})
export class VisualisationHeaderComponent implements OnInit {

  private page : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private pageService : PageService) { }

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
    this.pageService.setPage(1);
    this.professionnelSanteService.setCurrentPatient(null);
  }

  Deconnexion(){
      if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
        this.pageService.setPage(0);
        this.professionnelSanteService.setCurrentId("");
        this.professionnelSanteService.setCurrentPatient(null);
      } 
    
  }

}
