import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DicerollerComponent } from './diceroller/diceroller.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'diceroller', component: DicerollerComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopbarComponent,
    DicerollerComponent,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
