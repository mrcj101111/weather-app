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
  FirstForecastFirstQuarter: Forecast;
  FirstForecastSecondQuarter: Forecast;
  FirstForecastThirdQuarter: Forecast;
  FirstForecastFourthQuarter: Forecast;
  SecondForecastFirstQuarter: Forecast;
  SecondForecastSecondQuarter: Forecast;
  SecondForecastThirdQuarter: Forecast;
  SecondForecastFourthQuarter: Forecast;
  FirstForecast24Hour: forecast24Hour;
  SecondForecast24Hour: forecast24Hour;

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getForecast48Hour()
      .subscribe(data => {
        this.weather = data.value;
        this.FirstForecastFirstQuarter = this.weather.forecast24Hour[0].Forecast[0] ? this.weather.forecast24Hour[0].Forecast[0] : null;
        this.FirstForecastSecondQuarter = this.weather.forecast24Hour[0].Forecast[1] ? this.weather.forecast24Hour[0].Forecast[1] : null;
        this.FirstForecastThirdQuarter = this.weather.forecast24Hour[0].Forecast[2] ? this.weather.forecast24Hour[0].Forecast[2] : null;
        this.FirstForecastFourthQuarter = this.weather.forecast24Hour[0].Forecast[3] ? this.weather.forecast24Hour[0].Forecast[3] : null;

        this.SecondForecastFirstQuarter = this.weather.forecast24Hour[1].Forecast[0] ? this.weather.forecast24Hour[1].Forecast[0] : null;
        this.SecondForecastSecondQuarter = this.weather.forecast24Hour[1].Forecast[1] ? this.weather.forecast24Hour[1].Forecast[1] : null;
        this.SecondForecastThirdQuarter = this.weather.forecast24Hour[1].Forecast[2] ? this.weather.forecast24Hour[1].Forecast[2] : null;
        this.SecondForecastFourthQuarter = this.weather.forecast24Hour[1].Forecast[3] ? this.weather.forecast24Hour[1].Forecast[3] : null;

        this.FirstForecast24Hour = this.weather.forecast24Hour[0] ? this.weather.forecast24Hour[0] : null;
        this.SecondForecast24Hour = this.weather.forecast24Hour[1] ? this.weather.forecast24Hour[1] : null;
      });

  }

}