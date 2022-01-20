import { Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LocationStrategy} from '@angular/common';


@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent {

  constructor(private url:LocationStrategy) {
    this.items = [];
  }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Compendium', icon: 'pi pi-fw pi-search', routerLink: ['/compendium']},
          {label: 'Dice Roller', icon: 'pi pi-fw pi-th-large', routerLink: ['/diceroller']},
          {label: 'Characters', icon: 'pi pi-fw pi-file', routerLink: ['/characters']},
          {label: 'Campaigns', icon: 'pi pi-fw pi-map', routerLink: ['/campaigns']},
          {label: 'Initiative Tracker', icon: 'pi pi-fw pi-sort-numeric-down-alt', routerLink: ['/init-tracker']},
          {label: 'Login', icon: 'pi pi-user', routerLink: ['/login-google']}
      ];
  }
}
