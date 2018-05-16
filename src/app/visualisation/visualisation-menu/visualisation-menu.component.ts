import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../service/page.service';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-menu',
  templateUrl: './visualisation-menu.component.html',
  styleUrls: ['./visualisation-menu.component.css']
})
export class VisualisationMenuComponent implements OnInit {

  constructor(private pageService : PageService, private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {}

  test(){
    alert("ça marche !");
  }

  retourMesPatients(){
    this.pageService.setPage(1);
  }

  Deconnexion(){
      if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
        this.pageService.setPage(0);
        this.professionnelSanteService.setCurrentId("");
        this.professionnelSanteService.setCurrentPatient(null);
      } 
    
  }

}
