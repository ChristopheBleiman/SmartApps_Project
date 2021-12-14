import { Component, OnInit } from '@angular/core';
import { getAuth } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  characterName: string = "";
  characterClass: string = "";
  characterSubclass: string = "";
  characterLevel: number = 0;
  characterHP: number = 0;
  characterAC: number = 0;
  characterSTR: number = 0;
  characterDEX: number = 0;
  characterCON: number = 0;
  characterINT: number = 0;
  characterWIS: number = 0;
  characterCHA: number = 0;
  ErrorString: string = "";
  charactersCollection: any;

  classes: string[];

  constructor(private db: AngularFirestore, private router: Router) {
    this.classes = [
      "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"
    ];
    this.charactersCollection = db.collection('characters');
  }

  ngOnInit() {
  }

  ShowModifier(score: number) {
    let modifier: number = Math.floor((score - 10) / 2);
    if (modifier >= 0) {
      return '+' + modifier;
    } else {
      return modifier;
    }
  }

  CreateCharacter() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      this.ErrorString = "Please log in before making a character";
    }
    else if (this.characterName.trim() == "" || this.characterName == null ||
    this.characterSubclass.trim() == "" || this.characterSubclass == null ||
    this.characterLevel == 0 || this.characterLevel == null ||
    this.characterHP == 0 || this.characterHP == null ||
    this.characterAC == 0 || this.characterAC == null ||
    this.characterSTR == 0 || this.characterSTR == null ||
    this.characterDEX == 0 || this.characterDEX == null ||
    this.characterCON == 0 || this.characterCON == null ||
    this.characterINT == 0 || this.characterINT == null ||
    this.characterWIS == 0 || this.characterWIS == null ||
    this.characterCHA == 0 || this.characterCHA == null) {
      this.ErrorString = "Please fill in all fields properly";
    }
    else {
      this.charactersCollection.add({Name: this.characterName,
        Class: this.characterClass,
        Subclass: this.characterSubclass,
        Level: this.characterLevel,
        HP: this.characterHP,
        AC: this.characterAC,
        STR: this.characterSTR,
        DEX: this.characterDEX,
        CON: this.characterCON,
        INT: this.characterINT,
        WIS: this.characterWIS,
        CHA: this.characterCHA,
        UserUID: user?.uid
      });
      this.router.navigate(['/characters']);
    }
  }
}
