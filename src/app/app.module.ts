import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ConnexionModule } from './connexion/connexion.module';
import { CommonModule } from '@angular/common';

import { PageService } from '../service/page.service';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { ConnexionService } from '../service/connexion.service';

import { AppComponent } from './app.component';
import { MesPatientsHeaderComponent } from './mes-patients-header/mes-patients-header.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MesPatientsHeaderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    ConnexionModule
  ],
  providers: [
    PageService,
    ProfessionnelSanteService,
    ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
