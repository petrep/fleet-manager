import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  data = {
    drivers: [
      {
      id: 1,
      name: "John Doe",
      email: "jd@gmail.com",
      phone: "+3612131231",
      city: "Los Angeles",
      address: "My address"
      }
    ],
    vehicles: [
      {
      id: 1,
      lp: "GOD-258",
      year: 2015,
      manufacturer: "Volkswagen",
      consumption: 7,
      engine: "diesel"
      }
    ],
    fuelings: [
      {
      id: 1,
      vehicle: 1,
      driver: 1,
      amount: 40,
      date: "2019-04-02",
      }
    ]

  };

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
