import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { WebApiService } from '../service/web-api.service';
import { TestComponent } from './test/test.component';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [ProfessionnelSanteService, WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
