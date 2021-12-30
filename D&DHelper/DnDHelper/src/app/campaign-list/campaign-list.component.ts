import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';
import { deleteDoc, doc, Firestore } from 'firebase/firestore';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CampaignListComponent implements OnInit {
  campaigns: Observable<any[]> | undefined;
  user : any;

  constructor(private firestore: AngularFirestore, private firebase: Firestore, private confirmationService: ConfirmationService) { 
    const auth = getAuth();
    this.user = auth.currentUser;
    if(this.user){
      this.campaigns = firestore.collection('campaigns', ref => ref.where('UserID', '==', this.user.uid)).valueChanges({ idField: 'id' });
    }
  }

  ngOnInit(): void {
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

}
