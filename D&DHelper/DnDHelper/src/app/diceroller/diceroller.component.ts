import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrls: ['./diceroller.component.css']
})
export class DicerollerComponent implements OnInit {

  constructor() {}
  ngOnInit() {
  }

  RollDice() {
    let diceAmount4 = (<HTMLInputElement>document.querySelector("#amountD4Dice")).value;
    let diceAmount6 = (<HTMLInputElement>document.querySelector("#amountD6Dice")).value;
    let diceAmount8 = (<HTMLInputElement>document.querySelector("#amountD8Dice")).value;
    let diceAmount10 = (<HTMLInputElement>document.querySelector("#amountD10Dice")).value;
    let diceAmount12 = (<HTMLInputElement>document.querySelector("#amountD12Dice")).value;
    let diceAmount20 = (<HTMLInputElement>document.querySelector("#amountD20Dice")).value;
    let diceAmount100 = (<HTMLInputElement>document.querySelector("#amountD100Dice")).value;
    
    if(parseInt(`${diceAmount4}`) > 0){
      this.RollD4(parseInt(`${diceAmount4}`));
      this.ClearD4Dice();
    }

    if(parseInt(`${diceAmount6}`) > 0){
      this.RollD6(parseInt(`${diceAmount6}`));
      this.ClearD6Dice();
    }

    if(parseInt(`${diceAmount8}`) > 0){
      this.RollD8(parseInt(`${diceAmount8}`));
      this.ClearD8Dice();
    }

    if(parseInt(`${diceAmount10}`) > 0){
      this.RollD10(parseInt(`${diceAmount10}`));
      this.ClearD10Dice();
    }

    if(parseInt(`${diceAmount12}`) > 0){
      this.RollD12(parseInt(`${diceAmount12}`));
      this.ClearD12Dice();
    }

    if(parseInt(`${diceAmount20}`) > 0){
      this.RollD20(parseInt(`${diceAmount20}`));
      this.ClearD20Dice();
    }

    if(parseInt(`${diceAmount100}`) > 0){
      this.RollD100(parseInt(`${diceAmount100}`));
      this.ClearD100Dice();
    }
  }

  RollD4(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*4)
      li.appendChild(document.createTextNode(`1D4:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D4: ${total}`));
    ul?.appendChild(li);
  }

  ClearD4Dice(){
    (<HTMLInputElement>document.querySelector("#amountD4Dice")).value = "0";
  }

  RollD6(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*6)
      li.appendChild(document.createTextNode(`1D6:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D6: ${total}`));
    ul?.appendChild(li);
  }

  ClearD6Dice(){
    (<HTMLInputElement>document.querySelector("#amountD6Dice")).value = "0";
  }

  RollD8(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*8)
      li.appendChild(document.createTextNode(`1D8:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D8: ${total}`));
    ul?.appendChild(li);
  }

  ClearD8Dice(){
    (<HTMLInputElement>document.querySelector("#amountD8Dice")).value = "0";
  }

  RollD10(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*10)
      li.appendChild(document.createTextNode(`1D10:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D10: ${total}`));
    ul?.appendChild(li);
  }

  ClearD10Dice(){
    (<HTMLInputElement>document.querySelector("#amountD10Dice")).value = "0";
  }

  RollD12(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*12)
      li.appendChild(document.createTextNode(`1D12:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D12: ${total}`));
    ul?.appendChild(li);
  }

  ClearD12Dice(){
    (<HTMLInputElement>document.querySelector("#amountD12Dice")).value = "0";
  }

  RollD20(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*20)
      li.appendChild(document.createTextNode(`1D20:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D20: ${total}`));
    ul?.appendChild(li);
  }

  ClearD20Dice(){
    (<HTMLInputElement>document.querySelector("#amountD20Dice")).value = "0";
  }

  RollD100(diceAmount: number) {
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    let total = 0;

    for (let index = 0; index < diceAmount; index++) {
      random = Math.ceil(Math.random()*100)
      li.appendChild(document.createTextNode(`1D100:${random} `));
      ul?.appendChild(li);
      total += random;
    }
    li.appendChild(document.createTextNode(`→Total: ${diceAmount}D100: ${total}`));
    ul?.appendChild(li);
  }

  ClearD100Dice(){
    (<HTMLInputElement>document.querySelector("#amountD100Dice")).value = "0";
  }

}
