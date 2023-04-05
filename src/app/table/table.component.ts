import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entry, Group, lineType } from '../classes/line';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	displayedColumns = ['name', 'quantity', 'unit', 'unitPrice', 'total'];

	list: lineType[] = [new Group('Installation chauffage')];
	source: MatTableDataSource<lineType> = new MatTableDataSource(this.list);

	//test data
	ngOnInit() {
		if (this.list[0] instanceof Group) {
			this.list[0].children.set('asdf', new Entry('asdf'));
		}
		for (let x = 0; x < 10; x++) {
			this.list.push(new Group(x.toString()));
		}

		this.source = new MatTableDataSource(this.list);
	}
}