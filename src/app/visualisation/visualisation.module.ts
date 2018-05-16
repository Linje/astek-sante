import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationMenuComponent } from './visualisation-menu/visualisation-menu.component';
import { VisualisationHeaderComponent } from './visualisation-header/visualisation-header.component';
import { VisualisationTabSymptomeComponent } from './visualisation-tab-symptome/visualisation-tab-symptome.component';
import { VisualisationSymptomeComponent } from './visualisation-symptome/visualisation-symptome.component';
import { VisualisationGraphiqueComponent } from './visualisation-graphique/visualisation-graphique.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule 
  ],
  declarations: [VisualisationMenuComponent,
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueComponent],
  exports : [VisualisationMenuComponent,
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent,
    VisualisationGraphiqueComponent]
})
export class VisualisationModule { }
