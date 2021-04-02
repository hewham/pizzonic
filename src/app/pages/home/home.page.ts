import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

}
