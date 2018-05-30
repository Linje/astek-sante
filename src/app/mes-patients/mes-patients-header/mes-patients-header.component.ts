import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

import { Router } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-mes-patients-header',
  templateUrl: './mes-patients-header.component.html',
  styleUrls: ['./mes-patients-header.component.css']
})
export class MesPatientsHeaderComponent implements OnInit {

  private page: number;
  
  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {
    this.page = 0;
  }

  deconnect(){
    if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
      this.router.navigateByUrl("/connexion");
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
