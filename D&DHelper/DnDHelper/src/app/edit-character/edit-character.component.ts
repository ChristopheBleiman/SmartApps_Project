import { Component, Input, OnInit } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  charName : string = window.localStorage.getItem("charName")!;
  charHP : string = window.localStorage.getItem("charHP")!;
  charAC : string = window.localStorage.getItem("charAC")!;
  charSTR : string = window.localStorage.getItem("charSTR")!;
  charDEX : string = window.localStorage.getItem("charDEX")!;
  charCON : string = window.localStorage.getItem("charCON")!;
  charINT : string = window.localStorage.getItem("charINT")!;
  charWIS : string = window.localStorage.getItem("charWIS")!;
  charCHA : string = window.localStorage.getItem("charCHA")!;
  charactersCollection: any;

  constructor(private db: AngularFirestore) {
    this.charactersCollection = db.collection('characters');
   }

  ngOnInit(): void {
    let charLevel = window.localStorage.getItem("charLevel");
    let charRace = window.localStorage.getItem("charRace");
    let charSubclass = window.localStorage.getItem("charSubclass");
    let charClass = window.localStorage.getItem("charClass");
    let basicInf = document.querySelector('#basicInfo')!;
    basicInf.innerHTML = `Level ${charLevel} ${charRace} ${charSubclass} ${charClass}`;

    let charName = window.localStorage.getItem("charName")!;
    let charH3 = document.querySelector('#characterName')!;
    charH3.innerHTML = charName;
  }

  editChar(){
    let docId = window.localStorage.getItem("docId");
    this.charactersCollection.doc(`${docId}`).update({
      HP: this.charHP,
      AC: this.charAC,
      STR: this.charSTR,
      DEX: this.charDEX,
      INT: this.charINT,
      WIS: this.charWIS,
      CHA: this.charCHA
    });
  }

}
