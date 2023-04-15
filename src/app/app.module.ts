import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		TableComponent,
  MenuComponent
	],
	imports: [
		BrowserModule,
		MatTableModule,
		MatTreeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
