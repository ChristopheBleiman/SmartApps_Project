import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.css']
})
export class InitiativeTrackerComponent implements OnInit {
  initList: Initiative[] = [];

  constructor() {

  }

  ngOnInit() {
    if (localStorage.getItem("initList") != null) {
      this.initList = JSON.parse(window.localStorage.getItem("initList")!)
    }
  }

  ClearInitiative() {
    localStorage.setItem("initList", "");
    this.initList = [];
  }
  NextTurn() {
    const char: Initiative = this.initList[0];
    this.initList.shift();
    this.initList.push(char);
  }
  SortInit() {
    this.initList.sort(this.compare);
    window.localStorage.setItem("initList", JSON.stringify(this.initList));
  }
  compare( a: { score: number; }, b: { score: number; } ) {
    if ( a.score < b.score ){
      return 1;
    }
    if ( a.score > b.score ){
      return -1;
    }
    return 0;
  }

}
export interface Initiative{
  name: string;
  score: number;
}
