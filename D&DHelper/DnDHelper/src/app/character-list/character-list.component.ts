import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection, where, query, getDocs } from '@angular/fire/firestore';
import { getAuth } from "firebase/auth";
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { deleteDoc, doc } from 'firebase/firestore';

export interface Character {
  Name: string,
  Level: number,
  Class: string,
  Subclass: string,
  Race: string,
  HP: number,
  AC: number,
  STR: number,
  DEX: number,
  CON: number,
  INT: number,
  WIS: number,
  CHA: number,
  UserUID: string,
  Proficiencies: any[],
  id: string
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CharacterListComponent implements OnInit {
  characters!: Observable<any[]>;
  user: any;
  constructor(private firestore: AngularFirestore, private firebase: Firestore, private confirmationService: ConfirmationService) {
    const auth = getAuth();
    this.user = auth.currentUser;
    if (this.user) {
      this.characters = firestore.collection('characters', ref => ref.where('UserUID', '==', this.user.uid)).valueChanges({ idField: 'id' });
      this.characters.forEach(character => {
        //character.Proficiencies = firestore.collection("characters/"+ character.id +"/Proficiencies")
      });
    }
  }
  ngOnInit() { }

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

  confirmDelete(char: any, event: any) {
    this.confirmationService.confirm({
      target: event.target,
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete this character? This action cannot be undone',
      accept: async () => {
        await deleteDoc(doc(this.firebase, "characters", char.id));
      }
    });
  }

  async EditCharacter(char: any) {
    window.localStorage.setItem("docId", char.id);
    window.localStorage.setItem("char", JSON.stringify(char));
  }
}
