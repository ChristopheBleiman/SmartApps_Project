import { Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent {

  constructor() {
    this.items = [];
    this.activeItem = this.items[0];
  }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Compendium', icon: 'pi pi-fw pi-search', routerLink: ['/']},
          {label: 'Dice Roller', icon: 'pi pi-fw pi-th-large', routerLink: ['/diceroller']},
          {label: 'Characters', icon: 'pi pi-fw pi-file'},
          {label: 'Campaigns', icon: 'pi pi-fw pi-map'},
          {label: 'Initiative Tracker', icon: 'pi pi-fw pi-sort-numeric-down-alt'}
      ];

      this.activeItem = this.items[0];
  }
}
