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

  RollD4() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*4)
    li.appendChild(document.createTextNode(`1D4: ${random}`));
    ul?.appendChild(li);
  }

  RollD6() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*6)
    li.appendChild(document.createTextNode(`1D6: ${random}`));
    ul?.appendChild(li);
  }

  RollD8() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*8)
    li.appendChild(document.createTextNode(`1D8: ${random}`));
    ul?.appendChild(li);
  }

  RollD10() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*10)
    li.appendChild(document.createTextNode(`1D10: ${random}`));
    ul?.appendChild(li);
  }

  RollD12() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*12)
    li.appendChild(document.createTextNode(`1D12: ${random}`));
    ul?.appendChild(li);
  }

  RollD20() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*20)
    li.appendChild(document.createTextNode(`1D20: ${random}`));
    ul?.appendChild(li);
  }

  RollD100() {
    //let amountRolls = document.querySelector("#D4Roll");
    //amountRolls?.appendChild(document.createTextNode("Amount of dice:"));
    let ul = document.querySelector("#lstRolls");
    let li = document.createElement("li");
    let random;
    random = Math.ceil(Math.random()*100)
    li.appendChild(document.createTextNode(`1D100: ${random}`));
    ul?.appendChild(li);
  }

}
