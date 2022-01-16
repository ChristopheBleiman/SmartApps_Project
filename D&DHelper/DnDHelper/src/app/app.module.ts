import { Firestore } from '@angular/fire/firestore';
import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {InputTextareaModule} from 'primeng/inputtextarea';




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
import { AddCharacterComponent } from './add-character/add-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { JoinCampaignComponent } from './join-campaign/join-campaign.component';
import { enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


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
      { path: 'characters/add', component: AddCharacterComponent },
      { path: 'characters/edit', component: EditCharacterComponent},
      { path: 'campaigns', component: CampaignListComponent},
      { path: 'campaigns/add', component: AddCampaignComponent},
      { path: 'campaigns/edit', component: EditCampaignComponent},
      { path: 'campaigns/join', component: JoinCampaignComponent},
      { path: 'login-google', component: LoginGoogleComponent}
    ]),
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    ToolbarModule,
    TabMenuModule,
    DropdownModule,
    MenubarModule,
    ConfirmPopupModule,
    BrowserAnimationsModule,
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
    AddCharacterComponent,
    EditCharacterComponent,
    CampaignListComponent,
    AddCampaignComponent,
    EditCampaignComponent,
    JoinCampaignComponent
   ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private firebase: Firestore) {
    enableIndexedDbPersistence(firebase);
    getAuth();
  }

}
