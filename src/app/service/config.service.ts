import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#' },
      { key: 'name', text: 'Name' },
      { key: 'email', text: 'Email' },
      { key: 'phone', text: 'Phone' },
      { key: 'city', text: 'City' },
      { key: 'address', text: 'Street Address' }
    ],
    vehicles: [
      { key: 'id', text: '#' },
      { key: 'lp', text: 'lp.' },
      { key: 'year', text: 'year.' },
      { key: 'manufacturer', text: 'manuf.' },
      { key: 'consumption', text: 'cons.' },
      { key: 'engine', text: 'eng.' },
    ],
    fuelings: [
      { key: 'id', text: '#' },
      { key: 'vehicle', text: 'Vehicle' },
      { key: 'driver', text: 'Driver' },
      { key: 'amount', text: 'Amount' },
      { key: 'date', text: 'Date' },
    ]
  };


  constructor() { }
}
