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

  @Input()
  cols: any[] = [];

  deleteIconClass: string = 'fa fa-trash-o';

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
