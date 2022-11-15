import { OnInit, OnDestroy, Injectable, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';

@Injectable()
export class Base implements OnInit {
title = 'FleetManager';
list: any = {};
cols: any[] = [];
listSubscription: Subscription = new Subscription;

constructor(
  private baseService: BaseService,
  private config: ConfigService,
  @Inject(String) public dataType: string
) {}

ngOnInit(): void {
  this.cols = this.config.cols[this.dataType];
  this.listSubscription = this.baseService.getAll(this.dataType)
  .subscribe(
    list => this.list = list,
    err => console.error(err),
    () => console.log('unsubscribed')
  );    
}

ngOnDestroy() {
  this.listSubscription.unsubscribe();
}

onCreate(row: any): void {
  this.baseService.create('drivers', row);
}

onUpdate(row: any): void {
  this.baseService.update('drivers', row);
}

onDelete(row: any): void {
  this.baseService.delete('drivers', row);
}
}
