import { Firestore } from '@angular/fire/firestore';
import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';


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
import { environment } from '../environments/environment';
import { CharacterListComponent } from './character-list/character-list.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireModule} from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/compendium', pathMatch: 'full' },
      { path: 'compendium', component: CompendiumComponent },
      { path: 'compendium/spells/:spellIndex', component: SpellDetailsComponent },
      { path: 'diceroller', component: DicerollerComponent },
      { path: 'characters', component: CharacterListComponent },
      { path: 'login-google', component: LoginGoogleComponent}
    ]),
    ButtonModule,
    InputNumberModule,
    CardModule,
    ToolbarModule,
    TabMenuModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  declarations: [
    AppComponent,
    DicerollerComponent,
    TabNavComponent,
    CompendiumComponent,
    SpellDetailsComponent,
    CharacterListComponent,
    LoginGoogleComponent,
   ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
