import { Component, OnInit } from '@angular/core';
import { Entry, Group, lineType } from '../classes/line';
import { formatNumber } from '@angular/common';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	list: lineType[] = [new Group('Installation chauffage')];
	displayMenu: boolean = false;
	menuLine!: lineType;


	//helpers
	//getters
	printQuantity(line: lineType) {
		if (line instanceof Entry) return line.quantity;
		return '';
	}

	printUnit(line: lineType) {
		if (line instanceof Entry) return line.unit;
		return '';
	}

	printUnitPrice(line: lineType) {
		if (line instanceof Entry) return line.unitPrice;
		return '';
	}

	getChildren(line: lineType): lineType[] {
		if (line instanceof Group) return line.children;
		return [];
	}

	isGroup(line: lineType): line is Group {
		return line instanceof Group;
	}

	addGroup() {
		this.list.push(new Group('Nouveau groupe'));
	}

	openMenu(line: lineType) {
		this.displayMenu = true;
		this.menuLine = line;
	}

	closeMenu(open: boolean) {
		this.displayMenu = open;
	}

	//test data
	ngOnInit() {
		if (this.list[0] instanceof Group) {
			this.list[0].children.push(new Group('asdf'));
			if (this.list[0].children[0] instanceof Group) {
				this.list[0].children[0].children.push(new Entry('asd'));
			}
		}
	}
}