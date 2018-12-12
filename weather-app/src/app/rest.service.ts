import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(private http: HttpClient) { }

  getForecast48Hour(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'X-AjaxPro-Method': 'GetForeCast48Hour' })
    };
    return this.http.post(endpoint, body, httpOptions).pipe(
      map(this.extractData),
    )
  }

  getForecast7Day(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'X-AjaxPro-Method': 'GetForecast7Day' })
    };
    return this.http.post(endpoint, body, httpOptions).pipe(
      map(this.extractData),
    )
  }

  getCurrentForecast(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'X-AjaxPro-Method': 'GetCurrentOne' })
    };
    return this.http.post(endpoint, body, httpOptions).pipe(
      map(this.extractData),
      //tap(data => console.log('getCurrentForecast', data))
    )
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}

const endpoint = 'http://weather.news24.com/ajaxpro/Weather.Code.Ajax,Weather.ashx';
const body = { "cityId": "77107" };
// ===== open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir http://localhost:8100/ --disable-web-security =====> Use this to open Chrome and avoid cors errors //