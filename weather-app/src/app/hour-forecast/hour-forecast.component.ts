import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';

import { Value } from '../models/hour-forecast-model/value.model';
import { forecast24Hour } from '../models/hour-forecast-model/forecast24Hour.model';
import { Forecast } from '../models/hour-forecast-model/forecast.model';

@Component({
  selector: 'app-hour-forecast',
  templateUrl: './hour-forecast.component.html',
  styleUrls: ['./hour-forecast.component.scss']
})
export class HourForecastComponent implements OnInit {
  weather: Value;
  forecastFirstEvening: Forecast;
  forecastFirstNight: Forecast;
  forecastFirstMorning: Forecast;
  forecastFirstAfternoon: Forecast;
  forecastSecondEvening: Forecast;
  forecastSecondNight: Forecast;
  forecastSecondMorning: Forecast;
  forecastSecondAfternoon: Forecast;

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getForecast48Hour()
      .subscribe(data => {
        this.weather = data.value;
        console.log(data)
        this.forecastFirstEvening = this.weather.forecast24Hour[0].Forecast[0] ? this.weather.forecast24Hour[0].Forecast[0]  : null;
        this.forecastFirstNight = this.weather.forecast24Hour[0].Forecast[1] ? this.weather.forecast24Hour[0].Forecast[1]  : null;
      });

  }

}