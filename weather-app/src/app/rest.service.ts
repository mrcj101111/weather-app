import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private _url: string = "http://weather.news24.com/ajaxpro/Weather.Code.Ajax";

  constructor(private http: HttpClient) { }

getWeather(): Observable<any[]> {
  return this.http.get<any[]>(this._url);
}

  

  //getWeather(): Observable<any> {
    //console.log('httpOptions', httpOptions);
    //return this.http.post(endpoint, body, httpOptions).pipe(
      //map(this.extractData)
    //)
  //}


  //private extractData(res: Response) {
    //let body = res;
    //return body || {

    //};
  //}
}

//const endpoint = 'http://weather.news24.com/ajaxpro/Weather.Code.Ajax';
//const body = { "cityId": "77107" };
//let httpOptions = {
  //headers: new HttpHeaders({
    //'X-AjaxPro-Method': 'GetCurrentOne',
  //})
//};

