import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';
import { Base } from '../base';

@Component({
  selector: 'app-fueling',
  templateUrl: './fueling.component.html',
  styleUrls: ['./fueling.component.css']
})
export class FuelingComponent extends Base{

  constructor(
    baseService: BaseService,
    config: ConfigService
  ) {
    super(baseService, config, 'fuelings');
   }
}
