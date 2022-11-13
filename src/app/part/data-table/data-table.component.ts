import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  deleteIconClass: string = 'fa fa-trash-o';

  cols: {key:string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Street Address'}
  ];
  driver: any = {};

  constructor(
    private bs: BaseService
  ) { }

  ngOnInit(): void {
    this.driver = this.bs.getAll('drivers')[0];
  }

  onUpdate($event): void {
    alert('update');
  }

  onDelete($event): void {
    alert(`Clicked on ${$event} button`);
  }

}
