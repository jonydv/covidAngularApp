import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidDataComponent } from './pages/covid-data/covid-data.component';
import { ComparativeDataComponent } from './pages/comparative-data/comparative-data.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CovidDataComponent, ComparativeDataComponent],
  imports: [
    CommonModule,
    CovidRoutingModule,
    SharedModule
  ]
})
export class CovidModule { }
