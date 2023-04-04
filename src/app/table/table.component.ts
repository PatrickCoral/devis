import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from '../classes/line';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns = ['name', 'quantity', 'unit', 'unitPrice', 'total'];

  list: Group[] = [new Group('Installation chauffage')];
  source: MatTableDataSource<Group> = new MatTableDataSource(this.list);
}