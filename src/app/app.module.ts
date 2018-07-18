import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ProfessionnelSanteService } from '../service/professionnel-sante.service';
import { ConnexionService } from '../service/connexion.service';

import { AppComponent } from './app.component';

import { ConnexionModule } from './connexion/connexion.module';
import { MesPatientsModule } from './mes-patients/mes-patients.module';
import { VisualisationModule } from './visualisation/visualisation.module';

//Routes
import { RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { MesPatientsHeaderComponent } from './mes-patients/mes-patients-header/mes-patients-header.component';
import { VisualisationHeaderComponent } from './visualisation/visualisation-header/visualisation-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
//-------
import { NgProgressModule } from 'ngx-progressbar';
import { AuthGuard } from './auth.guard';
import { AuthConnexionGuard } from './authConnexion.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccueilComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    NgProgressModule,
    ConnexionModule,
    MesPatientsModule,
    VisualisationModule,
    //Routes
    RouterModule.forRoot([
      { path: 'accueil',canActivate: [AuthConnexionGuard], component : AccueilComponent} ,
      { path: 'connexion',canActivate: [AuthConnexionGuard], component : ConnexionComponent } ,
      { path: 'mesPatients', canActivate: [AuthGuard], component : MesPatientsHeaderComponent } ,
      { path: 'mesPatients/visualisation', canActivate: [AuthGuard], component : VisualisationHeaderComponent} ,
      { path: '',   redirectTo: '/accueil', pathMatch: 'full'} ,
      { path: '**', component: PageNotFoundComponent } ,

    ])
    //----------
  ],
  providers: [
    ProfessionnelSanteService,
    ConnexionService,
    AuthGuard,
    AuthConnexionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
