import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FleetManager';
  driver: any = {};
  cols: any[] = [];

  constructor(
    private baseService: BaseService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.driver = this.baseService.getAll('drivers');
    this.cols = this.config.cols.drivers;
  }

}
