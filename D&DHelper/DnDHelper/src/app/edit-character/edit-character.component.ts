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
  
  char: any = JSON.parse(window.localStorage.getItem("char")!);

  charLevel: string = this.char.Level;
  charSubclass : string = this.char.Subclass;
  charName : string = this.char.Name;
  charHP : string = this.char.HP;
  charAC : string = this.char.AC;
  charSTR : string = this.char.STR;
  charDEX : string = this.char.DEX;
  charCON : string = this.char.CON;
  charINT : string = this.char.INT;
  charWIS : string = this.char.WIS;
  charCHA : string = this.char.CHA;
  charactersCollection: any;

  constructor(private db: AngularFirestore) {
    this.charactersCollection = db.collection('characters');
   }

  ngOnInit(): void {
    let charH3 = document.querySelector('#characterName')!;
    charH3.innerHTML = this.char.Name;
  }

  editChar(){
    let docId = window.localStorage.getItem("docId");

    let charEditLevel = document.querySelector('#charEditLevel')!.ariaValueNow;
    let charEditSubclass = document.querySelector('#charEditSubclass')!;
    console.log(charEditSubclass);
    this.charactersCollection.doc(`${docId}`).update({
      Level: charEditLevel,
      Sublass: this.char.Subclass,
      HP: this.char.HP,
      AC: this.char.AC,
      STR: this.char.STR,
      DEX: this.char.DEX,
      INT: this.char.INT,
      WIS: this.char.WIS,
      CHA: this.char.CHA
    });
  }

}
