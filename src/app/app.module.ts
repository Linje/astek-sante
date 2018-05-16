import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

//Pour les graphiques
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
//------------------
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { PageService } from '../service/page.service';
import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { ConnexionService } from '../service/connexion.service';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { ConnexionModule } from './connexion/connexion.module';
import { MesPatientsModule } from './mes-patients/mes-patients.module';
import { VisualisationModule } from './visualisation/visualisation.module';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    ConnexionModule,
    MesPatientsModule,
    VisualisationModule,

    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    PageService,
    ProfessionnelSanteService,
    ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
