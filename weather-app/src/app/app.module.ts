import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HourForecastComponent } from './hour-forecast/hour-forecast.component';
import { DayForecastComponent } from './day-forecast/day-forecast.component';
import { TideForecastComponent } from './tide-forecast/tide-forecast.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';


const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'current-weather', pathMatch: 'full' },
      { path: 'current-weather', component: CurrentWeatherComponent },
      { path: 'hour-forecast', component: HourForecastComponent },
      { path: 'day-forecast', component: DayForecastComponent },
      { path: 'tide-forecast', component: TideForecastComponent }
    ]
  },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'weather-dashboard', component: WeatherDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CurrentWeatherComponent,
    HourForecastComponent,
    DayForecastComponent,
    TideForecastComponent,
    WeatherDashboardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
