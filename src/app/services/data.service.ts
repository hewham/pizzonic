import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  savedPizzas = []

  constructor() {}

  addPizza(pizza) {
    this.savedPizzas.push(pizza);
  }
}
