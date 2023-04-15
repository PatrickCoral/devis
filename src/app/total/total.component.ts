import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  @Input() total: number = 0;
  vat: number = 0;
  trueTotal: number = 0;

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    this.updateValues();
  }

  updateValues(){
    this.vat = this.total * 7.7/100;
    this.trueTotal = Math.round((this.total + this.vat) * 10) / 10;
  }
}
