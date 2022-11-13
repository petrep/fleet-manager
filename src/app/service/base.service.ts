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
    ]    

  };

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
