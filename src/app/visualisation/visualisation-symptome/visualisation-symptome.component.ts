import { Component, OnInit, Input } from '@angular/core';
import { Symptome } from '../../../model/symptome';

@Component({
  selector: 'app-visualisation-symptome',
  templateUrl: './visualisation-symptome.component.html',
  styleUrls: ['./visualisation-symptome.component.css']
})
export class VisualisationSymptomeComponent implements OnInit {
  @Input() symptome: Symptome;

  constructor() { }

  ngOnInit() {
  }

}
