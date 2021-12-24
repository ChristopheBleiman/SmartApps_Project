import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { doc, where, getDoc, getDocs, query } from 'firebase/firestore';

export interface Character { name: string}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Observable<any[]>;
  private charCollection : any;

  constructor(private firestore: Firestore, private db: AngularFirestore) {
    const Collection = collection(firestore, 'characters');
    this.charCollection = db.collection('characters');
    this.characters = collectionData(Collection);
  }
  ngOnInit() {}

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
  CalculateProficientThrow(level: number, statsc: number){
    let modifier: number = this.CalculateModifier(statsc)+this.CalculateProficiencyBonus(level);
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
  AddCharacter(){

  }

  /* =======================================================
     EDIT CHARS
    ======================================================== */

  async EditCharacter(char: any){
    const q = query(collection(this.firestore, "characters"), where("Name", "==", `${char.Name}`))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id)
      window.localStorage.setItem("docId", doc.id);
    })

    window.localStorage.setItem("charName", char.Name);
    window.localStorage.setItem("charLevel", char.Level);
    window.localStorage.setItem("charRace", char.Race);
    window.localStorage.setItem("charSubclass", char.Subclass);
    window.localStorage.setItem("charClass", char.Class);
    window.localStorage.setItem("charHP", char.HP);
    window.localStorage.setItem("charAC", char.AC);
    window.localStorage.setItem("charSTR", char.STR);
    window.localStorage.setItem("charDEX", char.DEX);
    window.localStorage.setItem("charCON", char.CON);
    window.localStorage.setItem("charINT", char.INT);
    window.localStorage.setItem("charWIS", char.WIS);
    window.localStorage.setItem("charCHA", char.CHA);
  }
}
