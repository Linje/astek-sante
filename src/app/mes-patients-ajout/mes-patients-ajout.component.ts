import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mes-patients-ajout',
  templateUrl: './mes-patients-ajout.component.html',
  styleUrls: ['./mes-patients-ajout.component.css']
})
export class MesPatientsAjoutComponent implements OnInit {
 
  @Output() pageEvent = new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }

  ajouterUnPatient(nom : string, prenom : string, dateDeNaissance : string){
    alert(nom + prenom + dateDeNaissance);
    this.pageEvent.emit(0);
  }

}
