import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-weather-main-component',
  templateUrl: './weather-main-component.component.html',
  styleUrls: ['./weather-main-component.component.scss']
})
export class WeatherMainComponentComponent implements OnInit {
  public weatherData: any;
  constructor(private http: HttpClient) { }
  sunIcon = faSun;
  moonIcon = faMoon;
  city = "seoni"
  ngOnInit(): void {
    this.weatherData = {
      main: {},
      isDay: true
    }
    this.getWeatherData(this.city);
  }

  getWeatherData(city: string) {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ff1bc4683fc7325e9c57e586c20cc03e').subscribe((data) => {
      this.setWeatherData(data);
    })
  }

  setWeatherData(data: any) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    this.weatherData.humidity = this.weatherData.main.humidity;
    this.weatherData.city = this.weatherData.name;


  }

  citySubmit(item: any) {
    this.city = item.citySelected;
    this.getWeatherData(this.city);
  }

}
