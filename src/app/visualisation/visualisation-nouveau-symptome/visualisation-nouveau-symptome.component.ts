import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-visualisation-nouveau-symptome',
  templateUrl: './visualisation-nouveau-symptome.component.html',
  styleUrls: ['./visualisation-nouveau-symptome.component.scss']
})
export class VisualisationNouveauSymptomeComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {}

  ajouterUnSymptome(nom : string, description : string, echelle1 : number, echelle2 : number){
    alert(nom + description + echelle1 + echelle2);
    this.pageEvent.emit(false)
  }

  annuler(){
    this.pageEvent.emit(false);
  }

}
