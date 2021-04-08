import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { DoughnutComponent } from './components/charts/doughnut/doughnut.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { LineComponent } from './components/charts/line/line.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, BarComponent, DoughnutComponent, PieComponent, LineComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
