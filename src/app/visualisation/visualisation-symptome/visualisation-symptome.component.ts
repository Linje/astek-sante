import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Router } from '@angular/router';
import { resolve } from 'url';
import { Valeur } from '../../../model/valeur';

@Component({
  selector: 'app-visualisation-symptome',
  templateUrl: './visualisation-symptome.component.html',
  styleUrls: ['./visualisation-symptome.component.css']
})
export class VisualisationSymptomeComponent implements OnInit {
  @Input() symptome: Symptome;
  @Output() deleteEvent = new EventEmitter<boolean>();

  private intensite : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {}

  deleteSymptome(s : Symptome){
    if(confirm("Etes vous sur de vouloir supprimer le symptome '' " + s.getNom() +" '' ?")) {
      this.professionnelSanteService.deleteSymptome(s.getNumberS()).then(() => {
        this.rechargerPage();
      });
    } 
  }

  rechargerPage(){
    this.professionnelSanteService.getListSymptomeWebApi().then((s)=>{
      this.professionnelSanteService.getCurrentPatient().setListSymptome(s).then(()=>{ 
        this.rechargerValeurs(s).then(()=>{
          this.deleteEvent.emit(true);
        });
      });
          
    });
  }
  rechargerValeurs(s : Symptome[]) : Promise<void>{
    return new Promise((resolve) => {
      if(s.length > 0){
        for(let s of this.professionnelSanteService.getCurrentPatient().getListSymptome()){
          this.professionnelSanteService.getListValeurWebApi(s.getNumberS()).then((v)=>{
              s.setListValeur(v);
          });
        }
      }
      return resolve(null);    
    });
  }

  parametreSymptome(){
    alert("fonctionnalite non disponible pour le moment");
  }

  ajouterValeur(){
    if(this.intensite >= this.symptome.getEchelle()[0] && this.intensite <= this.symptome.getEchelle()[1]){
      this.professionnelSanteService.addValeur(new Valeur(this.intensite, new Date()),this.symptome.getNumberS()).then(()=>{
      this.rechargerPage();
      this.intensite = null;
    });
    }
    else alert("l'intensité renseignée n'est pas compris dans l'échelle (" + this.symptome.getEchelle() + ")" );
  }

}
