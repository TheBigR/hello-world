import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newCarName = '';

  cars = [
    'Isuzu',
    'Subaru',
    'BMW'
  ];
  updateNewCarName(e)  {
    this.newCarName = e.target.value;
  }
  addCar() {
    this.cars.push(this.newCarName);
  }

  constructor() { }

  ngOnInit() {
  }

}
