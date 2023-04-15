import { Component, EventEmitter, Input, Output } from '@angular/core';
import { lineType } from '../classes/line';
import { Entry } from '../classes/line';
import { Group } from '../classes/line';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent {
	@Input('line') line!: lineType;
	@Output() close = new EventEmitter<boolean>;

	addEntry(line: lineType) {
		if (line instanceof Entry) return;
		line.children.push(new Entry('Nouvel entrée'));
		this.closeMenu();
	}

	addGroup(line: lineType) {
		if (line instanceof Entry) return;
		line.children.push(new Group('Nouveau groupe'));
		this.closeMenu();
	}

	closeMenu() {
		this.close.emit(false);
	}
}
