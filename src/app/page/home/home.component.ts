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
  driverChart: GoogleChartInterface | undefined;
  dayChart: GoogleChartInterface | undefined;
  
  columnChartOptions: any = {
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
        this.initCharts(data);
      },
      err => console.error(err)
    );
  }

  initCharts(data: any[]): void {
    let byVehicle = this.processByType(data, row => row.vehicle.lp, row => row.amount);
    
    let byDriver = this.processByType(data, row => row.driver.name, row => row.amount);
    
    let byDay = this.processByType(data, row => row.date, row => row.amount);

    console.log(byVehicle);

    this.vehicleChart = this.collectChartData(
      [['Vehicle', 'Consumption']].concat(byVehicle), 'PieChart', this.pieChartOptions
    );

    this.driverChart = this.collectChartData(
      [['Driver', 'Consumption']].concat(byDriver), 'PieChart', this.pieChartOptions
    );

    this.dayChart = this.collectChartData(
      [['Vehicle', 'Consumption']].concat(byDay), 'ColumnChart', this.columnChartOptions
    );
  }

  collectChartData(data: any[], type: string, options: any): any {
    return {
      chartType: type,
      dataTable: data,
      options: options
    }
  }

  processByType(data: any[], getKey: Function, getValue): any[] {
    let processed: any = {};
    let table: any[] = [];

    for (let row of data) {
      let key = getKey(row);
      if (!processed[key]) {
        processed[key] = 0;
      }
      processed[key] += parseInt(getValue(row));
    }

    for (let k in processed) {
      table.push([k, processed[k]]);
    }
    return table;
  }
}
