import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private pageService : PageService){}

}
