import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  listSubscription: Subscription = new Subscription;

  constructor(
    private baseService: BaseService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.cols = this.config.cols.drivers;
    this.listSubscription = this.baseService.getAll('drivers')
    .subscribe(
      list => this.driver = list,
      err => console.error(err),
      () => console.log('unsubscribed')
    );    
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

}
