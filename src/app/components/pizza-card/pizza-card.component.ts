import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {

  @Input('input') pizza;

  constructor() { }

  ngOnInit() {
  }

}
