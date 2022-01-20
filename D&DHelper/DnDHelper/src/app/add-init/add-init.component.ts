import { Initiative } from './../initiative-tracker/initiative-tracker.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-init',
  templateUrl: './add-init.component.html',
  styleUrls: ['./add-init.component.css']
})
export class AddInitComponent implements OnInit {
  initiativeName: string = "";
  initiativeModifier: number = 0;
  initiativeScoreNoMod: number = 0;
  initiativeScore: number = 0;
  ErrorString: string = "";
  initList: Initiative[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("initList") != null) {
      this.initList = JSON.parse(window.localStorage.getItem("initList")!)
    }
  }

  RollDice() {
    this.initiativeScoreNoMod = Math.ceil(Math.random()*20)
    this.initiativeScore = this.initiativeScoreNoMod + this.initiativeModifier;
  }
  AddToInitiative() {
    this.initiativeScore = this.initiativeScoreNoMod + this.initiativeModifier;
    if (this.initiativeName == "" || this.initiativeScoreNoMod == 0 || this.initiativeScore == null) {
      this.ErrorString = "Please fill in every field"
    }
    else {
      const init: Initiative = {name: this.initiativeName, score: this.initiativeScore }
      this.initList.push(init)
      window.localStorage.setItem("initList", JSON.stringify(this.initList));
      this.router.navigate(['/init-tracker']);
    }
  }
}
