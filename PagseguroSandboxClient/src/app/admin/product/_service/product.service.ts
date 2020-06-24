import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getWeatherForecast() {
    return this.http.get('https://localhost:5001/WeatherForecast');
  }

}
