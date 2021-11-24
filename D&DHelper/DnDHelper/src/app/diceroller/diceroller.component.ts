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

  ShowAmountD4(){
    let showRolls = document.querySelector("#D4Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD4Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD4(parseInt(`${diceAmount}`));
      this.ClearD4Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD6(){
    let showRolls = document.querySelector("#D6Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD6Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD6(parseInt(`${diceAmount}`));
      this.ClearD6Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD8(){
    let showRolls = document.querySelector("#D8Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD8Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD8(parseInt(`${diceAmount}`));
      this.ClearD8Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD10(){
    let showRolls = document.querySelector("#D10Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD10Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD10(parseInt(`${diceAmount}`));
      this.ClearD10Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD12(){
    let showRolls = document.querySelector("#D12Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD12Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD12(parseInt(`${diceAmount}`));
      this.ClearD12Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD20(){
    let showRolls = document.querySelector("#D20Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD20Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD20(parseInt(`${diceAmount}`));
      this.ClearD20Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
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

  ShowAmountD100(){
    let showRolls = document.querySelector("#D100Dice");
    let diceAmount = (<HTMLInputElement>document.querySelector("#amountD100Dice")).value;
    if(parseInt(`${diceAmount}`) > 0){
      this.RollD100(parseInt(`${diceAmount}`));
      this.ClearD100Dice();
      showRolls?.setAttribute("hidden", "");
    }
    else if(parseInt(`${diceAmount}`) == 0){
      showRolls?.removeAttribute("hidden");
    }
  }

  ClearD100Dice(){
    (<HTMLInputElement>document.querySelector("#amountD100Dice")).value = "0";
  }

}
