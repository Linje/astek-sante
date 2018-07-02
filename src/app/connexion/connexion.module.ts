import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion.component';

import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  imports: [NgProgressModule],
  declarations: [
  ConnexionComponent],
  exports: [
    ConnexionComponent
  ]
})


export class ConnexionModule { }

