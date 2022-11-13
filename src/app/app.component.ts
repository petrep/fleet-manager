import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FleetManager';
  driver: any = {};

  constructor(
    private baseService: BaseService
  ) {}

  ngOnInit(): void {
    this.driver = this.baseService.getAll('drivers');    
  }

}
