import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  cols: {key:string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Street Address'}
  ];

  deleteIconClass: string = 'fa fa-trash-o';

  constructor() {
    setInterval( () => {
      if (this.deleteIconClass == 'fa fa-trash-o') {
        this.deleteIconClass = 'fa fa-trash';
      } else {
        this.deleteIconClass = 'fa fa-trash-o';
      }
    }, 1000);
   }

  ngOnInit(): void {
  }

  onUpdate($event): void {
    alert('update');
  }

  onDelete($event): void {
    alert(`Clicked on ${$event} button`);
  }

}
