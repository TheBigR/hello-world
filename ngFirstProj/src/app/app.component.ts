import { Component } from '@angular/core';
import {CarserviceService} from './carservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCarName = '';
  cars = [];

  constructor(private carService: CarserviceService) {
    this.cars = carService.cars;
  }
  updateNewCarName(e)  {
    this.newCarName = e.target.value;
  }
  addCar() {
    this.carService.addCar(this.newCarName);
  }
}
