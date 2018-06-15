import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
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
export class VisualisationSymptomeComponent implements OnInit, OnChanges {
  @Input() symptome: Symptome;
  @Output() deleteEvent = new EventEmitter<boolean>();

  private intensite : number;
  
  private switch : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router) { }

  ngOnInit() {
    this.switch = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.intensite = null;
  }

  deleteSymptome(s : Symptome){
    if(confirm("Etes vous sur de vouloir supprimer le symptome '' " + s.getNom() +" '' ?")) {
      this.professionnelSanteService.deleteSymptome(s.getNumberS()).then(() => {
        this.deleteEvent.emit(true);
      });
    } 
  }

  ajouterValeur(){
    if(this.intensite >= this.symptome.getEchelle()[0] && this.intensite <= this.symptome.getEchelle()[1]){
      this.professionnelSanteService.addValeur(new Valeur(this.intensite, new Date()),this.symptome.getNumberS()).then(()=>{
      this.deleteEvent.emit(false);
      this.intensite = null;
    });
    }
    else alert("la valeur renseignée n'est pas compris dans l'échelle (" + this.symptome.getEchelle() + ")" );
  } 
  
  
  parametreSymptome(){
    this.switch=2;
  }

  pageEvent(d:boolean){
    this.switch=1;
  }

}
