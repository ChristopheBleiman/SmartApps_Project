import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-campaign',
  templateUrl: './join-campaign.component.html',
  styleUrls: ['./join-campaign.component.css']
})

export class JoinCampaignComponent implements OnInit {
  campaign: any = JSON.parse(window.localStorage.getItem('campaignToJoin')!);
  characters!: Observable<any[]>;
  joinableCharacters!: Observable<any[]>;
  charactersCollection : any;

  constructor(private db: AngularFirestore, private firebase: Firestore, private router: Router) {
    this.characters = db.collection('characters', ref => ref.where('CampaignId', '==', this.campaign.id)).valueChanges({ idField: 'id' });
    this.joinableCharacters = db.collection('characters', ref => ref.where('CampaignId', '==', '')).valueChanges({ idField: 'id' });
    this.charactersCollection = db.collection('characters'); 
  }

  ngOnInit() {
    let campaignNameH3 = document.querySelector('#CampaignName');
    let campaignDescription = document.querySelector('#CampaignDescription');

    campaignNameH3!.innerHTML = this.campaign.Name;
    campaignDescription!.innerHTML = this.campaign.Description;
  }

  JoinCharacter(char: any){
    this.charactersCollection.doc(`${char.id}`).update({
      CampaignId: this.campaign.id
    });
  }

  btnBack(){
    this.router.navigate(['/campaigns']);
  }
  /**Doel join-campaign page:
   * Toon basisinfo campaign x
   * Toon basisinfo characters die er al in zitten (naam, level, class, subclass) x
   * Toon alle characters om mee te joinen x
   * Join button voor character x
   * Campaign zou in campaignToJoin localstorage moeten staan */
}
