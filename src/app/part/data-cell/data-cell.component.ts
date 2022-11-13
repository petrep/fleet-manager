import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {
  @Input() cellValue;
  @Input() col;


  constructor() { }

  ngOnInit(): void {
  }

}
