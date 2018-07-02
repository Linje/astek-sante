import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationHeaderComponent } from './visualisation-header/visualisation-header.component';
import { VisualisationTabSymptomeComponent } from './visualisation-tab-symptome/visualisation-tab-symptome.component';
import { VisualisationSymptomeComponent } from './visualisation-symptome/visualisation-symptome.component';
import { VisualisationGraphiqueTousLesSymptomesComponent } from './visualisation-graphique-tous-les-symptomes/visualisation-graphique-tous-les-symptomes.component';
import { VisualisationNouveauSymptomeComponent } from './visualisation-nouveau-symptome/visualisation-nouveau-symptome.component';
import { VisualisationParametrePatientComponent } from './visualisation-parametre-patient/visualisation-parametre-patient.component';
import { VisualisationParametreSymptomeComponent } from './visualisation-parametre-symptome/visualisation-parametre-symptome.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { FormsModule } from '@angular/forms';

import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    NgProgressModule
  ],
  declarations: [
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueTousLesSymptomesComponent,
    VisualisationNouveauSymptomeComponent,
    VisualisationParametrePatientComponent,
    VisualisationParametreSymptomeComponent],
  exports : [
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueTousLesSymptomesComponent,
    VisualisationNouveauSymptomeComponent,
    VisualisationParametrePatientComponent,
    VisualisationParametreSymptomeComponent]
})
export class VisualisationModule { }
