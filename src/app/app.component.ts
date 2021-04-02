import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isDark: boolean = false;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Pizza', url: '/pizza', icon: 'pizza' },
  ];
  constructor() {}

  toggleDark() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
  }
}
