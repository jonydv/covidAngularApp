import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { Country } from '../../../shared/interfaces/country.interface';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.scss']
})
export class CovidDataComponent implements OnInit {

  countryData!: Country;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidCountryData()
      .subscribe(data => {
        console.log(data)
        return this.countryData = data
      });
  }

}
