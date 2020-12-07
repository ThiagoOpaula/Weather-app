import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl:string = 'http://api.weatherstack.com/';
  apiKey = 'current?access_key=76cd477f792b8ea54706927a2c0ac441'
  query = '&query='

  constructor(private http:HttpClient) { }

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.weatherUrl}${this.apiKey}${this.query}`);
  }

  updateWeather():Observable<Location> {
    return this.http.get<Location>(`${this.weatherUrl}${this.apiKey}${Location}`);
  }
}
