import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';
import { Base } from '../base';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends Base {

  constructor(
    baseService: BaseService,
    config: ConfigService
  ) {
    super(baseService, config, 'vehicles');
   }

}
