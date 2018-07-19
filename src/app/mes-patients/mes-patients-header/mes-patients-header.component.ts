import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

import { Router } from '@angular/router';

import { NgProgress } from 'ngx-progressbar';
import { ConnexionService } from '../../../service/connexion.service';

@Component({
  selector: 'app-mes-patients-header',
  templateUrl: './mes-patients-header.component.html',
  styleUrls: ['./mes-patients-header.component.css']
})
export class MesPatientsHeaderComponent implements OnInit {

  public page: number;
  
  constructor(public professionnelSanteService : ProfessionnelSanteService, 
    private router: Router, 
    private progressService : NgProgress,
    private connexionService : ConnexionService) { }

  ngOnInit() {
    if(this.professionnelSanteService.getListNomSymptome() == null){
      this.professionnelSanteService.getListNomSymptomeWebApi()
      .then(res =>{
        this.professionnelSanteService.setListNomSymptome(res);
        alert(res);
      });
    }

    this.progressService.start();

    this.page = 0;

    if(this.professionnelSanteService.getCurrentId()==null){
      this.getFromLocalStorage().then(()=>{
        this.loadData();
      });
    }
    else{
      this.loadData();
    }
  }

  loadData(){
    this.professionnelSanteService.getListPatientWebApi().then(data =>
      {
          this.professionnelSanteService.setListPatient(data);
          this.progressService.done();
      });
  }

//-----persistent connexion---------
  getFromLocalStorage(): Promise<void>{
    return new Promise((resolve, reject) => {
      this.connexionService.isLoggedIn().subscribe(val =>{ 
        this.professionnelSanteService.setCurrentId(val);
        resolve(null);
      });
    });
  }
//-----------------------------------  

  deconnect(){
    if(confirm("Vous êtes sur de vouloir vous deconnecter ?")) {
      this.router.navigateByUrl("/connexion");
      this.professionnelSanteService.setCurrentId("");
      
      this.connexionService.deconnect();
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
