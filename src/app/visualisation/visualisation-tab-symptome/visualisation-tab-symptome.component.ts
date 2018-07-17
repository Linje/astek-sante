import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Symptome } from '../../../model/symptome';

import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-visualisation-tab-symptome',
  templateUrl: './visualisation-tab-symptome.component.html',
  styleUrls: ['./visualisation-tab-symptome.component.css']
})
export class VisualisationTabSymptomeComponent implements OnInit{
  private symptomeSelectionne : Symptome;
  public switch : number;
  private buttonColor : string[] = [];
  private classbuttontous : string = "btn btn-outline-warning";

  constructor(public professionnelSanteService : ProfessionnelSanteService, private progressService : NgProgress) { }

  ngOnInit() {
    this.loadData();
  }

  afficherSymptome(symptome : Symptome, i : number){
    this.progressService.start();
    this.symptomeSelectionne = symptome;
    if(this.switch !=1) this.switch = 1;

    this.classbuttontous = "btn btn-outline-warning";
    for(let j = 0;j<this.professionnelSanteService.getCurrentPatient().getListSymptome().length; j++){
      this.buttonColor[j] = "btn btn-outline-info";
    }
    this.buttonColor[i] = "btn btn-info";

  }

  afficherTousLesSymptomes(){
    for(let j = 0;j<this.buttonColor.length; j++){
      this.buttonColor[j] = "btn btn-outline-info";
    }
    this.classbuttontous = "btn btn-warning";
    this.switch = 2;
  }

  deleteEvent(d: boolean){
    if(d) this.loadData();
    else{
      this.professionnelSanteService.getListValeurWebApi(this.symptomeSelectionne.getNumberS()).then((v)=>{
        this.symptomeSelectionne.setListValeur(v);
      });
    }
  }

  loadData(){
    this.professionnelSanteService.getSymptomeAndValeurWebApi().then(()=>{
      if(this.professionnelSanteService.getCurrentPatient().getListSymptome().length > 0){
        this.switch = 1;
        this.afficherSymptome(this.professionnelSanteService.getCurrentPatient().getListSymptome()[0]);
      }
      else{
        this.switch = 3;
        this.progressService.done();
      }
    });
  }
}
