import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(
    private http:HttpClient
  ) { }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    return this.http.get(url);
  }

  create(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}`;
    this.http.post(url, row)
      .forEach(response => console.log(response));
  }
}
