import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Country } from '../../shared/interfaces/country.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidCountryData(): Observable<Country> {
    return this.http.get<Country>(`${environment.apiUrl}/countries/argentina?yesterday=true&strict=true&query`);
  }
}
