import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { PageService } from '../service/page.service';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { ConnexionService } from '../service/connexion.service';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { ConnexionModule } from './connexion/connexion.module';
import { MesPatientsModule } from './mes-patients/mes-patients.module';
import { VisualisationMenuComponent } from './visualisation-menu/visualisation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VisualisationMenuComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    ConnexionModule,
    MesPatientsModule
  ],
  providers: [
    PageService,
    ProfessionnelSanteService,
    ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
