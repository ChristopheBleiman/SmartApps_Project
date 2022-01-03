import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {

  ErrorString: string = "";
  campaignName: string = "";
  campaignDescription: string = "";
  campaignsCollection: any;
  user: any;

  constructor(private db: AngularFirestore, private router: Router) { 
    this.campaignsCollection = db.collection('campaigns');
    const auth = getAuth();
    this.user = auth.currentUser;
  }

  ngOnInit(): void {
  }

  CreateCampaign(){
    if (!this.user) {
      this.ErrorString = "Please log in before making a campaign";
    } else if(this.campaignName.trim() == "" || this.campaignName == null ||
    this.campaignDescription.trim() == "" || this.campaignDescription == null){
      this.ErrorString = "Please fill in all fields properly";
    }
    else {
      this.campaignsCollection.add({
        Name: this.campaignName,
        Description: this.campaignDescription,
        UserID: this.user.uid
      });
      this.router.navigate(['/campaigns']);
    }
  }

}
