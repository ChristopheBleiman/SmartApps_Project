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
    this.activeItem = this.items[0];
  }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Compendium', icon: 'pi pi-fw pi-search', routerLink: ['/compendium']},
          {label: 'Dice Roller', icon: 'pi pi-fw pi-th-large', routerLink: ['/diceroller']},
          {label: 'Characters', icon: 'pi pi-fw pi-file'},
          {label: 'Campaigns', icon: 'pi pi-fw pi-map'},
          {label: 'Initiative Tracker', icon: 'pi pi-fw pi-sort-numeric-down-alt'}
      ];
      if(this.url.path()==='/compendium'){

        this.activeItem = this.items[0];
      }
      else if(this.url.path()==='/diceroller'){

        this.activeItem = this.items[1];
      }
      else if(this.url.path()==='/characters'){

        this.activeItem = this.items[2];
      }
      else if(this.url.path()==='/campaigns'){

        this.activeItem = this.items[3];
      }
      else if(this.url.path()==='/initiative'){

        this.activeItem = this.items[4];
      }
      else{

        this.activeItem = this.items[0];
      }

  }
}
