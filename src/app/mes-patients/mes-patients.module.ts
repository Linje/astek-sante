import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesPatientsAjoutComponent } from './mes-patients-ajout/mes-patients-ajout.component';
import { MesPatientsHeaderComponent } from './mes-patients-header/mes-patients-header.component';
import { MesPatientsListeComponent } from './mes-patients-liste/mes-patients-liste.component';

import { FormsModule } from '@angular/forms';

import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgProgressModule
  ],
  declarations: [MesPatientsHeaderComponent,
    MesPatientsListeComponent,
    MesPatientsAjoutComponent],
    exports: [MesPatientsHeaderComponent,
      MesPatientsListeComponent,
      MesPatientsAjoutComponent]
})
export class MesPatientsModule { }
