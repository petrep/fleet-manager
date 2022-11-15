import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  phraseString;
  phraseKey: string = 'notset';
  deleteIconClass: string = 'fa fa-trash-o';
  newRow: any = {};

  constructor(
    private bs: BaseService
  ) { }

  ngOnInit(): void {

  }

  onCreate(row): void {
    this.create.emit(row);
  }

  onUpdate(row): void {
    this.update.emit(row);
  }

  onDelete($event): void {
    alert(`Clicked on ${$event} button`);
  }

}
