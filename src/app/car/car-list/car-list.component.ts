import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Array<Car> = [];
  summaryCars: Array<{ marca: string; total: number }> = [];
  constructor(private carService: CarService) {}

  getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;

      this.getSummary();
    });
  }

  getSummary(): void {
    this.summaryCars = Object.values(
      this.cars.reduce(
        (summary: Array<{ marca: string; total: number }>, currentCar) => {
          if (!summary[currentCar.marca as any])
            summary[currentCar.marca as any] = {
              marca: currentCar.marca,
              total: 1,
            };
          else summary[currentCar.marca as any].total += 1;
          return summary;
        },
        []
      )
    );
  }

  ngOnInit() {
    this.getCars();
  }
}
