import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualisation-graphique',
  templateUrl: './visualisation-graphique.component.html',
  styleUrls: ['./visualisation-graphique.component.scss']
})
export class VisualisationGraphiqueComponent implements OnInit {


  years: Array<Number> = [2012, 2013, 2014, 2015];
  students = [
    {
      name : 'Paul',
      results : [90, 77, 34, 30]
    },
    {
      name : 'Katie',
      results : [80, 21, 14, 30]
    },
    {
      name : 'Dave',
      results : [20, 77, 64, 30]
    },
    {
      name : 'Sarah',
      results : [70, 76, 94, 10]
    }
  ];

  constructor() { }

  ngOnInit() {}

}
