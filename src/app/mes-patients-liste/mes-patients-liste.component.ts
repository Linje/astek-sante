import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';

@Component({
  selector: 'app-mes-patients-liste',
  templateUrl: './mes-patients-liste.component.html',
  styleUrls: ['./mes-patients-liste.component.css']
})
export class MesPatientsListeComponent implements OnInit {

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
  }

}
