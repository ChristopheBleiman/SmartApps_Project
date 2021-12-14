import { Component, OnInit } from '@angular/core';

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

  classes: string[];

  constructor() {
    this.classes = [
      "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"
    ]
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
}
