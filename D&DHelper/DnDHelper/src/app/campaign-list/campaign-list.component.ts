import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';
import { getAuth } from "firebase/auth";
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { deleteDoc, doc } from 'firebase/firestore';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CampaignListComponent implements OnInit {
  campaigns!: Observable<any[]>;
  user : any;
  inviteCode: any;

  constructor(private firestore: AngularFirestore, private firebase: Firestore, private confirmationService: ConfirmationService) {
    const auth = getAuth();
    this.user = auth.currentUser;
    if(this.user){
      this.campaigns = firestore.collection('campaigns', ref => ref.where('UserID', '==', this.user.uid)).valueChanges({ idField: 'id' });
    }
  }

  ngOnInit() {
  }

  confirmDelete(campaign: any, event: any) {
    this.confirmationService.confirm({
      target: event.target,
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete this campaign? This action cannot be undone',
      accept: async () => {
        await deleteDoc(doc(this.firebase, "campaigns", campaign.id))
      }
    });
  }

  async EditCampaign(campaign: any) {
    window.localStorage.setItem("docId", campaign.id);
    window.localStorage.setItem("campaign", JSON.stringify(campaign));
  }

  JoinCampaign(){
    const campaignJoin = "campaigns/" + this.inviteCode;
    var campaign = this.firestore.doc(campaignJoin);
    window.localStorage.setItem("campaignToJoin", JSON.stringify(campaign));
  }

}
