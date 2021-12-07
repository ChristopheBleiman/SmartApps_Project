import { Input, NgModule } from '@angular/core';
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
import { SpellDetailsComponent } from './spell-details/spell-details.component';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CharacterListComponent } from './character-list/character-list.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/compendium', pathMatch: 'full' },
      { path: 'compendium', component: CompendiumComponent },
      { path: 'compendium/spells/:spellIndex', component: SpellDetailsComponent },
      { path: 'diceroller', component: DicerollerComponent },
      { path: 'characters', component: CharacterListComponent },
    ]),
    ButtonModule,
    InputNumberModule,
    ToolbarModule,
    TabMenuModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    AppComponent,
    DicerollerComponent,
    TabNavComponent,
    CompendiumComponent,
    SpellDetailsComponent,
    CharacterListComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
