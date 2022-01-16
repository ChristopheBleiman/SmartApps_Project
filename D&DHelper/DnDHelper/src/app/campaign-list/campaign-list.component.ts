import { Character } from './../character-list/character-list.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

import { Firestore, getDocs } from '@angular/fire/firestore';
import { getAuth } from "firebase/auth";
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { deleteDoc, doc, getDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { Router } from '@angular/router';

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
  errorString: string = "";

  // Geen idee hoe ervoor te zorgen dat ik alle campaigns waar je als speler in zit kan zien.
  constructor(private firestore: AngularFirestore, private firebase: Firestore, private confirmationService: ConfirmationService, private router: Router) {
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
        var characters: any;
        characters = this.firestore.collection('characters', ref => ref.where("CampaignId", "==", campaign.id));
        const q = query(collection(this.firebase, "characters"), where("CampaignId", "==", campaign.id));
        const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            characters.doc(doc.id).update({
              CampaignId: ""
            });
          });
        await deleteDoc(doc(this.firebase, "campaigns", campaign.id))
      }
    });
  }

  async EditCampaign(campaign: any) {
    window.localStorage.setItem("docId", campaign.id);
    window.localStorage.setItem("campaign", JSON.stringify(campaign));
  }

  async JoinCampaign(){
    if (this.inviteCode != undefined) {
      var campaign = doc(this.firebase, "campaigns", this.inviteCode);
      const campaignSnap = await getDoc(campaign);
      if (campaignSnap.exists()) {
        var campaignToJoin = {
          id: this.inviteCode,
          Name: campaignSnap.data().Name,
          Description: campaignSnap.data().Description,
          UserId: campaignSnap.data().UserID
        }
        window.localStorage.setItem("campaignToJoin", JSON.stringify(campaignToJoin));
        this.errorString = "";
        this.router.navigate(['/campaigns/join']);
        } else {
        this.errorString = "This invite code does not exist"
      }
    } else {
      this.errorString = "This invite code does not exist"
    }
  }

}
