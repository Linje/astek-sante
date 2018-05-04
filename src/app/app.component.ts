import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  
  title = 'application professionnel de sante';


  constructor(private pageService : PageService){}

}
