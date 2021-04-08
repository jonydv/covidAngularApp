import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidDataComponent } from './pages/covid-data/covid-data.component';


@NgModule({
  declarations: [CovidDataComponent],
  imports: [
    CommonModule,
    CovidRoutingModule
  ]
})
export class CovidModule { }
