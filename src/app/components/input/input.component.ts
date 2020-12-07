import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

import { Weather } from '../../models/weather';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  weather:Weather[]

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
  }

}
