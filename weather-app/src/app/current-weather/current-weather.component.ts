import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

import { Value } from '../models/current-weather-model/value.model';
import { FirstObservation } from '../models/current-weather-model/firstObservation.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weather: Value;
  currentForecast: FirstObservation;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCurrentForecast()
      .subscribe(data => {
        this.weather = data.value;
        this.currentForecast = this.weather.FirstObservation ? this.weather.FirstObservation : null;
      });

  }

}
