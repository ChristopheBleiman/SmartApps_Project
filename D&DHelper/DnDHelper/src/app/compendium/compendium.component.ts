import { Spell, SpellList } from './../spells.service';
import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.css']
})
export class CompendiumComponent implements OnInit {
  spellList: SpellList | undefined;
  Online: boolean;

  constructor(private spell:SpellsService){
    this.Online = navigator.onLine
    if(navigator.onLine){
      this.LoadSpells();
    }
  }

  ngOnInit() {
  }

  LoadSpells(){
    this.spell.getData().subscribe(data => this.spellList = {
      count: (data as any).count,
      results: (data as any).results,
    })
  }

}
