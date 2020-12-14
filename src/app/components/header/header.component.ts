import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  weather:Weather[]

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
  }
}
