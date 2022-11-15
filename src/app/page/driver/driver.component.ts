import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';
import { Base } from '../base';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent extends Base {

  constructor(
    baseService: BaseService,
    config: ConfigService
  ) {
    super(baseService, config, 'drivers');
   }


}
