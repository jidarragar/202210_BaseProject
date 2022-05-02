/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Car } from '../car';
import { CarListComponent } from './car-list.component';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CarListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      component.cars.push(
        new Car(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.image.imageUrl()
        )
      );
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
    nativeElement = debug.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe tener 3 Registros en component.cars', () => {
    expect(component.cars.length).toEqual(3);
  });

  it('Se debe tener encabezado', () => {
    expect(nativeElement.querySelector('thead')?.childNodes.length).toEqual(1);
  });
  it('Se debe tener 3 registros en la tabla', () => {
    expect(
      nativeElement.querySelector('tbody')?.querySelectorAll('tr.carClass')
        .length
    ).toEqual(3);
  });
});
