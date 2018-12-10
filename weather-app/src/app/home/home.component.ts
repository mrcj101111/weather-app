import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weather: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getWeather();

    var state = "expanded";
    //Check if navbar is expanded or minimized and handle
    $('#navbar-toggle').click(function () {
      if (state == "expanded") {
        $('.sidebar').css('margin-left', '-180px');
        state = "minimized";
      } else {
        if (state == "minimized") {
          $('.sidebar').css('margin-left', '0px');
          state = "expanded";
        }
      }
    })
  }
  getWeather() {
    this.weather = [];
    console.log('home getWeather()');
    this.rest.getWeather().subscribe((data: {}) => {
      console.log(data);
      this.weather = data;
    })
  }
}

