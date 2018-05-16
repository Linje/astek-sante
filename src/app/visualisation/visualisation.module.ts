import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationMenuComponent } from './visualisation-menu/visualisation-menu.component';
import { VisualisationHeaderComponent } from './visualisation-header/visualisation-header.component';
import { VisualisationTabSymptomeComponent } from './visualisation-tab-symptome/visualisation-tab-symptome.component';
import { VisualisationSymptomeComponent } from './visualisation-symptome/visualisation-symptome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VisualisationMenuComponent,
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent],
  exports : [VisualisationMenuComponent,
    VisualisationHeaderComponent,
    VisualisationTabSymptomeComponent,
    VisualisationSymptomeComponent]
})
export class VisualisationModule { }
