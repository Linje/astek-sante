import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterViewInit, AfterViewChecked} from '@angular/core';
import { Symptome } from '../../../model/symptome';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';
import { Router } from '@angular/router';
import { Valeur } from '../../../model/valeur';

import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-visualisation-symptome',
  templateUrl: './visualisation-symptome.component.html',
  styleUrls: ['./visualisation-symptome.component.css']
})
export class VisualisationSymptomeComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {
  @Input() symptome: Symptome;
  @Output() deleteEvent = new EventEmitter<boolean>();

  private intensite : number;
  
  private switch : number;
  private typeChart : string;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private router: Router, private progressService : NgProgress) { }

  ngOnInit() {
    this.switch = 1;
    this.typeChart = "column";
  }

  ngAfterViewInit(): void {
    this.progressService.done();
  }

  ngAfterViewChecked(): void{
    this.progressService.done();
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
    else alert("la valeur renseignée n'est pas comprise dans l'échelle (" + this.symptome.getEchelle() + ")" );
  } 
  
  
  parametreSymptome(){
    this.switch=2;
  }

  pageEvent(d:boolean){
    this.switch=1;
    if(d) this.deleteEvent.emit(true);
  }

}
