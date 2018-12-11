import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.post(endpoint, body, httpOptions).pipe(
      map(this.extractData)
    )
  }

  private extractData(res: Response) {
    let body = res;
    return body || {

    };
  }
}

 const endpoint = 'http://weather.news24.com/ajaxpro/Weather.Code.Ajax,Weather.ashx';
const body = { "cityId": "77107" };
let httpOptions = {
  headers: new HttpHeaders({
    'X-AjaxPro-Method': 'GetCurrentOne',
  })
};

