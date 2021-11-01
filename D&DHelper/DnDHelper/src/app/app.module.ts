import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DicerollerComponent } from './diceroller/diceroller.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabNavComponent } from './tab-nav/tab-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'diceroller', component: DicerollerComponent },
    ]),
    ButtonModule,
    ToolbarModule,
    TabMenuModule,
  ],
  declarations: [
    AppComponent,
    DicerollerComponent,
    TabNavComponent,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
