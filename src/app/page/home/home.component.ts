import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vehicleChart: GoogleChartInterface | undefined;
  columnOptions: any = {
    is3D: true,
    chartArea: {width: 400, height: 400}
  };
  pieChartOptions: any = {
    is3D: true,
    chartArea: {width: 800, height: 400}
  };

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.baseService.query('fuelings', '_expand=vehicle&_expand=driver')
    .then(
      data => {
        this.processData(data);
      },
      err => console.error(err)
    );
  }

  processData(data): void {
    this.vehicleChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Vehicle', 'Consumption'],
        ['GGP-333', 40],
        ['DGP-333', 140],
        ['EEP-333', 430]
      ],
      options: this.pieChartOptions
    }
  }
}
