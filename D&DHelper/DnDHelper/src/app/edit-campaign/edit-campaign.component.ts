import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class EditCampaignComponent implements OnInit {
  campaign: any = JSON.parse(window.localStorage.getItem('campaign')!);
  ErrorString: any = "";
  campaignName: any = this.campaign.Name;
  campaignDescription : any = this.campaign.Description;
  campaignsCollection : any;
  characters: any;
  public autoResize: boolean = true;

  constructor(private db: AngularFirestore, private router: Router, private confirmationService: ConfirmationService) {
    this.campaignsCollection = db.collection('campaigns');
    this.characters = db.collection('characters', ref => ref.where('CampaignId', '==', this.campaign.id)).valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }

  editCampaign(){
    if (this.campaignName.trim() == "" || this.campaignName == null || this.campaignDescription.trim() == "" || this.campaignDescription == null) {
      this.ErrorString = "Please fill in all fields"
    }
    else {
      let docId = window.localStorage.getItem("docId");
      this.campaignsCollection.doc(`${docId}`).update({
        Name: this.campaignName,
        Description: this.campaignDescription
      });
      this.router.navigate(['/campaigns']);
    }
  }

  confirmDelete(char: any, event: any) {
    this.confirmationService.confirm({
      target: event.target,
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete this character from the campaign? This action cannot be undone',
      accept: async () => {
        const path = "characters/" + char.id;
        const ref = this.db.doc(path)
        ref.update({CampaignId : ""});
      }
    });
  }

  btnBack(){
    this.router.navigate(['/campaigns']);
  }

  ShowModifier(score: number) {
    let modifier: number = Math.floor((score - 10) / 2);
    if (modifier >= 0) {
      return '+' + modifier;
    } else {
      return modifier;
    }
  }
  CalculateModifier(score: number) {
    return Math.floor((score - 10) / 2);
  }
  CalculateProficiencyBonus(level: number) {
    let proficiency: number = Math.floor(2 + (level - 1) / 4);
    return proficiency;
  }
  CalculateProficientThrow(level: number, statsc: number) {
    let modifier: number = this.CalculateModifier(statsc) + this.CalculateProficiencyBonus(level);
    if (modifier >= 0) {
      return '+' + modifier;
    } else {
      return modifier;
    }
  }
  CalculateSavingThrow(pclass: any, stat: any, level: number, statsc: number) {
    switch (pclass) {
      case 'Barbarian':
        if (stat == "STR" || stat == "CON") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Bard':
        if (stat == "DEX" || stat == "CHA") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Cleric':
        if (stat == "WIS" || stat == "CHA") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Druid':
        if (stat == "INT" || stat == "WIS") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Fighter':
        if (stat == "STR" || stat == "CON") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Monk':
        if (stat == "STR" || stat == "DEX") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Paladin':
        if (stat == "WIS" || stat == "CHA") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Ranger':
        if (stat == "STR" || stat == "DEX") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Rogue':
        if (stat == "DEX" || stat == "INT") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Sorcerer':
        if (stat == "CON" || stat == "CHA") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Warlock':
        if (stat == "WIS" || stat == "CHA") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      case 'Wizard':
        if (stat == "INT" || stat == "WIS") {
          return this.CalculateProficientThrow(level, statsc) + " (Proficient)"
        }
        else {
          return this.ShowModifier(statsc);
        }
      default:
        return this.ShowModifier(statsc);
    }
  }

}
