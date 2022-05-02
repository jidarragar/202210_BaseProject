import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [CarListComponent],
  declarations: [CarListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarModule {}
