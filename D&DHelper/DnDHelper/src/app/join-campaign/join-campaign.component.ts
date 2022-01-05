import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-campaign',
  templateUrl: './join-campaign.component.html',
  styleUrls: ['./join-campaign.component.css']
})
export class JoinCampaignComponent implements OnInit {
  campaign: any;
  characters!: Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }
  /**Doel join-campaign page:
   * Toon basisinfo campaign
   * Toon basisinfo characters die er al in zitten (naam, level, class, subclass)
   * Toon alle characters om mee te joinen
   * Join button voor character
   * Campaign zou in campaignToJoin localstorage moeten staan */
}
