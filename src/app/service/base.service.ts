import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  serverUrl: string = "http://localhost:3000/";
  
  data = {
    drivers: [
      {
        id: 1,
        name: "John Doe",
        email: "jd@gmail.com",
        phone: 3612131231,
        city: "la",
        address: "My address"
      },
      {
        id: 2,
        name: "Jack Idol",
        email: "idol@gmail.com",
        phone: 36123424321,
        city: "bp",
        address: "PC Street 33"
      },
      {
        id: 3,
        name: "Charlie Filpo",
        email: "filpo@gmail.com",
        phone: 36288424321,
        city: "la",
        address: "My address"
      }
    ]

  };

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
