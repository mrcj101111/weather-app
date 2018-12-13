import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { Value } from '../models/day-forecast-model/value.model';
import { Forecasts } from '../models/day-forecast-model/Forecast.model';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.scss']
})
export class DayForecastComponent implements OnInit {
  weather: Value;
  ForecastDay1: Forecasts;
  ForecastDay2: Forecasts;
  ForecastDay3: Forecasts;
  ForecastDay4: Forecasts;
  ForecastDay5: Forecasts;
  ForecastDay6: Forecasts;
  ForecastDay7: Forecasts;


  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getForecast7Day()
      .subscribe(data => {
        this.weather = data.value;
        this.ForecastDay1 = this.weather.Forecasts[0] ? this.weather.Forecasts[0] : null;
        this.ForecastDay2 = this.weather.Forecasts[1] ? this.weather.Forecasts[0] : null;
        this.ForecastDay3 = this.weather.Forecasts[2] ? this.weather.Forecasts[0] : null;
        this.ForecastDay4 = this.weather.Forecasts[3] ? this.weather.Forecasts[0] : null;
        this.ForecastDay5 = this.weather.Forecasts[4] ? this.weather.Forecasts[0] : null;
        this.ForecastDay6 = this.weather.Forecasts[5] ? this.weather.Forecasts[0] : null;
        this.ForecastDay7 = this.weather.Forecasts[6] ? this.weather.Forecasts[0] : null;

      });

  }

}
