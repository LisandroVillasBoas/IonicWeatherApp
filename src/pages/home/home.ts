import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private model: any = [];
  weather: any;
  private city : string;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {
    this.showForecast();
  }

  private showForecast() {
    this.city = 'gravatai';
    this.weatherProvider.getForecast(this.city).subscribe(
      data => {
        // this.model = data['results'];
        this.weather = data.body.forecast.simpleforecast.forecastday;
        // console.log('OKK'+ data.body.response.features.forecast);
        console.log('OKK'+ this.weather[0].date.epoch);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }

    );

  }

}
