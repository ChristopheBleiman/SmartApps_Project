import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router"
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

  constructor(private db: AngularFirestore, private router: Router) {
    this.charactersCollection = db.collection('characters');
   }

  ngOnInit(): void {
    let charH3 = document.querySelector('#characterName')!;
    charH3.innerHTML = this.char.Name;
  }

  editChar(){
    let docId = window.localStorage.getItem("docId");

    let charEditLevel = (<HTMLInputElement>document.querySelector('#charEditLevel')).value!;
    let charEditSubclass = (<HTMLInputElement>document.querySelector('#charEditSubclass')).value!;
    let charEditHP = (<HTMLInputElement>document.querySelector('#charEditHP')).value!;
    let charEditAC = (<HTMLInputElement>document.querySelector('#charEditAC')).value!;
    let charEditSTR = (<HTMLInputElement>document.querySelector('#charEditSTR')).value!;
    let charEditDEX = (<HTMLInputElement>document.querySelector('#charEditDEX')).value!;
    let charEditCON = (<HTMLInputElement>document.querySelector('#charEditCON')).value!;
    let charEditINT = (<HTMLInputElement>document.querySelector('#charEditINT')).value!;
    let charEditWIS = (<HTMLInputElement>document.querySelector('#charEditWIS')).value!;
    let charEditCHA = (<HTMLInputElement>document.querySelector('#charEditCHA')).value!;

    this.charactersCollection.doc(`${docId}`).update({
      Level: charEditLevel,
      Subclass: charEditSubclass,
      HP: charEditHP,
      AC: charEditAC,
      STR: charEditSTR,
      DEX: charEditDEX,
      CON: charEditCON,
      INT: charEditINT,
      WIS: charEditWIS,
      CHA: charEditCHA
    });
    this.router.navigate(['/characters']);
  }

  btnBack(){
    this.router.navigate(['/characters']);
  }
}
