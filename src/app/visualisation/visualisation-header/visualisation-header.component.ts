import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../../service/professionnel-sante.service';

@Component({
  selector: 'app-visualisation-header',
  templateUrl: './visualisation-header.component.html',
  styleUrls: ['./visualisation-header.component.css']
})
export class VisualisationHeaderComponent implements OnInit {

  private page : number;

  constructor(private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
    this.page = 0;
  }

}
