import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  serverUrl: string = "http://localhost:3000/";
  
  observables: any = {};

  constructor(
    private http:HttpClient
  ) { }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    if (!this.observables[dataType]) {
      this.observables[dataType] = new Subject();
    }
    this.http.get(url).forEach(
      data => this.observables[dataType].next(data)
    );

    return this.observables[dataType];
  }

  create(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}`;
    this.http.post(url, row)
      .forEach(response => this.getAll(dataType) );
  }
}
