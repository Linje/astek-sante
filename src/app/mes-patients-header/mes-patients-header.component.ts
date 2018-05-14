import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-mes-patients-header',
  templateUrl: './mes-patients-header.component.html',
  styleUrls: ['./mes-patients-header.component.css']
})
export class MesPatientsHeaderComponent implements OnInit {

  private page: number;
  
  constructor(private professionnelSanteService : ProfessionnelSanteService, private pageService: PageService) { }

  ngOnInit() {
    this.page = 0;
  }

  deconnect(){
    if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
      this.pageService.setPage(0);
      this.professionnelSanteService.setCurrentId("");
    } 
  }

  ajoutPatient(){
    this.page = 1;
  }

  pageEvent(aj : boolean){
    if(aj){
      this.page = 0;
    }
    else{
      this.page = 0;
    } 
  }

  annuler(){
    this.page = 0;
  }

}
