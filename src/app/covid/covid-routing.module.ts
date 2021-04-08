import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDataComponent } from './pages/covid-data/covid-data.component';
import { ComparativeDataComponent } from './pages/comparative-data/comparative-data.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CovidDataComponent },
      { path: 'comparativa', component: ComparativeDataComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
