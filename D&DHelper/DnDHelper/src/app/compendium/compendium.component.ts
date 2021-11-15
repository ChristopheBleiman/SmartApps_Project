import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.css']
})
export class CompendiumComponent implements OnInit {
  spellArray = [];

  constructor(private spell:SpellsService){
    this.spell.getData().subscribe(data=>{
      console.warn(data.hasOwnProperty("results"));

      console.warn(this.spellArray);
    })
  }

  ngOnInit() {
  }

}
