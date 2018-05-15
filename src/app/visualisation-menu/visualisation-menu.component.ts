import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualisation-menu',
  templateUrl: './visualisation-menu.component.html',
  styleUrls: ['./visualisation-menu.component.css']
})
export class VisualisationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  test(){
    alert("ça marche !");
  }

}
