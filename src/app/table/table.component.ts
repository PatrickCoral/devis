import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry, Group, lineType } from '../classes/line';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent {
	@Output() returnTotal = new EventEmitter<number>;
	total: number = 0;
	list: Group[] = [];
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

	parseToFloat(event: Event): number {
		let qty = parseFloat((event.target as HTMLInputElement).value);
		if (isNaN(qty)) return 0;
		return qty;
	}

	updateQuantity(line: Entry, event: Event) {
		line.quantity = this.parseToFloat(event);
	}

	updateUnit(line: Entry, event: Event) {
		line.unit = (event.target as HTMLInputElement).value;
	}

	updateUnitPrice(line: Entry, event: Event) {
		console.log(this.parseToFloat(event))
		line.unitPrice = this.parseToFloat(event);
	}

	updateEntry(entry: Entry) {
		entry.total = entry.quantity * entry.unitPrice;
		this.updateTable();
	}

	updateTable() {
		let sum = 0;
		this.list.forEach(e => sum += this.getTotal(e));
		this.total = sum;
		this.returnTotal.emit(this.total);
	}

	getTotal(line: lineType) {
		if (line instanceof Entry) return line.total;
		let sum = 0;

		line.children.forEach(e => {
			sum += this.getTotal(e);
		})

		line.total = sum;

		return sum;
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

	// //test data
	// ngOnInit() {
	// 	if (this.list[0] instanceof Group) {
	// 		this.list[0].children.push(new Group('asdf'));
	// 		if (this.list[0].children[0] instanceof Group) {
	// 			this.list[0].children[0].children.push(new Entry('asd'));
	// 		}
	// 	}
	// }
}