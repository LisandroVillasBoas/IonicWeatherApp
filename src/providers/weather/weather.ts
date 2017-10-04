import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider { 
  private apiKey = 'b88e01212fc17de4';
  private url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/forecast/lang:BR/q/BR/';
  }


  public getForecast(city:string) {
    console.log('Y' + this.apiKey);
    return this.http.get<any>(this.url + city + '.json',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'application/json'),
        observe: 'response'
      }
    )
  }

}
