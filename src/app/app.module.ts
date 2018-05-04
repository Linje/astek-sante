import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { TestComponent } from './test/test.component';

import { HttpModule } from '@angular/http';
import { ConnexionModule } from './connexion/connexion.module';
import { CommonModule } from '@angular/common';
import { PageService } from '../service/page.service';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    ConnexionModule
  ],
  providers: [
    PageService,
    ProfessionnelSanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
