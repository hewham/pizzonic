import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  sauces = [
    "Red",
    "White",
    "Green"
  ]

  cheeses = [
    "Normal",
    "Extra",
    "Light"
  ]

  toppings = [
    "Pepperoni",
    "Ham",
    "Sausage",
    "Onions",
    "Peppers",
    "Mushroom",
    "Pineapple",
    "Olive"
  ]

  pizza = {
    sauce: null,
    cheese: null,
    toppings: []
  }

  constructor(
    public navCtrl: NavController,
    public dataService: DataService
  ) { }

  ngOnInit() {}

  save() {
    this.dataService.addPizza(this.pizza);
    this.pizza = {
      sauce: null,
      cheese: null,
      toppings: []
    }
    this.navCtrl.navigateRoot('home');
  }

}
