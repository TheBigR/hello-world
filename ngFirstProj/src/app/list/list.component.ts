import { Component, OnInit } from '@angular/core';
import {CarserviceService} from '../carservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  cars = [];

  constructor(private carService: CarserviceService) {
    this.cars = carService.cars;
  }



  ngOnInit() {
  }

}
