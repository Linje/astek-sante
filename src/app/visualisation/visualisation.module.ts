import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationHeaderComponent } from './visualisation-header/visualisation-header.component';
import { VisualisationTabSymptomeComponent } from './visualisation-tab-symptome/visualisation-tab-symptome.component';
import { VisualisationSymptomeComponent } from './visualisation-symptome/visualisation-symptome.component';
import { VisualisationGraphiqueComponent } from './visualisation-graphique/visualisation-graphique.component';
import { VisualisationGraphiqueTousLesSymptomesComponent } from './visualisation-graphique-tous-les-symptomes/visualisation-graphique-tous-les-symptomes.component';
import { VisualisationNouveauSymptomeComponent } from './visualisation-nouveau-symptome/visualisation-nouveau-symptome.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  declarations: [
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueComponent,
    VisualisationGraphiqueTousLesSymptomesComponent,
    VisualisationNouveauSymptomeComponent],
  exports : [
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueComponent,
    VisualisationGraphiqueTousLesSymptomesComponent,
    VisualisationNouveauSymptomeComponent]
})
export class VisualisationModule { }
