import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-campaign',
  templateUrl: './join-campaign.component.html',
  styleUrls: ['./join-campaign.component.css']
})

export class JoinCampaignComponent implements OnInit {
  campaign: any = JSON.parse(window.localStorage.getItem('campaignToJoin')!);
  characters!: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    let campaignNameH3 = document.querySelector('#CampaignName');
    let campaignDescription = document.querySelector('#CampaignDescription');

    campaignNameH3!.innerHTML = this.campaign.Name;
    campaignDescription!.innerHTML = this.campaign.Description;

    console.log(this.campaign.id)
  }
  /**Doel join-campaign page:
   * Toon basisinfo campaign x
   * Toon basisinfo characters die er al in zitten (naam, level, class, subclass)
   * Toon alle characters om mee te joinen
   * Join button voor character
   * Campaign zou in campaignToJoin localstorage moeten staan */
}
