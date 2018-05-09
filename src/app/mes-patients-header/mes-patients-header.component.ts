import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';

@Component({
  selector: 'app-mes-patients-header',
  templateUrl: './mes-patients-header.component.html',
  styleUrls: ['./mes-patients-header.component.css']
})
export class MesPatientsHeaderComponent implements OnInit {

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
  }

}
