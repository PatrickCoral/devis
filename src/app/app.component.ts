import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'devis';
	total: number = 0;

	updateTotal(total: number){
		this.total = total;
	}
}
