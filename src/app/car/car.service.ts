import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Car } from './car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = environment.carUrl;

constructor(private http: HttpClient) { }

getCars(): Observable<Car[]>{
   return this.http.get<Car[]>(this.apiUrl);
}

}
