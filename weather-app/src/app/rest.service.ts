import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  getWeather(): Observable<any> {
    console.log('httpOptions', httpOptions);
    return this.http.post(endpoint, body, httpOptions).pipe(
      map(this.extractData)
    )
  }

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {

    };
  }
}

const endpoint = 'http://weather.news24.com/ajaxpro/Weather.Code.Ajax';
const body = { "cityId": "77107" };
let httpOptions = {
  headers: new HttpHeaders({
    'X-AjaxPro-Method': 'GetCurrentOne',
  })
};

