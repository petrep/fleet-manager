import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#', type: "plain"},
      { key: 'name', text: 'Name', type: "text"},
      { key: 'email', text: 'Email', type: "email"},
      { key: 'phone', text: 'Phone', type: "number"},
      { key: 'city', text: 'City', type: "text"},
      { key: 'address', text: 'Street Address', type: "text"}
    ],
    vehicles: [
      { key: 'id', text: '#', type: "plain"},
      { key: 'lp', text: 'lp.', type: "text"},
      { key: 'year', text: 'year.', type: "number"},
      { key: 'manufacturer', text: 'manuf.', type: "text"},
      { key: 'consumption', text: 'cons.', type: "text"},
      { key: 'engine', text: 'eng.', type: "text"},
    ],
    fuelings: [
      { key: 'id', text: '#', type: "plain"},
      { key: 'vehicleId', text: 'Vehicle', type: "text"},
      { key: 'driverId', text: 'Driver', type: "text"},
      { key: 'amount', text: 'Amount', type: "text"},
      { key: 'date', text: 'Date', type: "text"},
    ]
  };


  constructor() { }
}
