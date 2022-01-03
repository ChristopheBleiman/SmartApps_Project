import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {
  campaign: any = JSON.parse(window.localStorage.getItem('campaign')!);

  campaignName: any = this.campaign.Name;
  campaignDescription : any = this.campaign.Description;
  campaignsCollection : any;

  constructor(private db: AngularFirestore, private router: Router) { 
    this.campaignsCollection = db.collection('campaigns');
  }

  ngOnInit(): void {
  }

  editCampaign(){
    let docId = window.localStorage.getItem("docId");

    let campaignEditName = (<HTMLInputElement>document.querySelector('#campaignEditName')).value!;
    let campaignEditDescription = (<HTMLInputElement>document.querySelector('#campaignEditDescription')).value!;

    this.campaignsCollection.doc(`${docId}`).update({
      Name: campaignEditName,
      Description: campaignEditDescription
    });
    this.router.navigate(['/campaigns']);
  }

}
