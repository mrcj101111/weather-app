import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
}

