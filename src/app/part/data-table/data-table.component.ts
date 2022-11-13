import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input()
  list: any[] = [];

  deleteIconClass: string = 'fa fa-trash-o';

  cols: {key:string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Street Address'}
  ];

  constructor(
    private bs: BaseService
  ) { }

  ngOnInit(): void {

  }

  onUpdate($event): void {
    alert('update');
  }

  onDelete($event): void {
    alert(`Clicked on ${$event} button`);
  }

}
