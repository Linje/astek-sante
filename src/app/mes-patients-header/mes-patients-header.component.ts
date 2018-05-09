import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-mes-patients-header',
  templateUrl: './mes-patients-header.component.html',
  styleUrls: ['./mes-patients-header.component.css']
})
export class MesPatientsHeaderComponent implements OnInit {

  constructor(private professionnelSanteService : ProfessionnelSanteService, private pageService: PageService) { }

  ngOnInit() {
  }

  deconnect(){
    if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
      this.pageService.setPage(0);
      this.professionnelSanteService.setCurrentId("");
    } 
  }

}
