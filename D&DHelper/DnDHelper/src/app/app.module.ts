import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DicerollerComponent } from './diceroller/diceroller.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { CompendiumComponent } from './compendium/compendium.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/compendium', pathMatch: 'full' },
      { path: 'compendium', component: CompendiumComponent },
      { path: 'diceroller', component: DicerollerComponent },
    ]),
    ButtonModule,
    ToolbarModule,
    TabMenuModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DicerollerComponent,
    TabNavComponent,
      CompendiumComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
