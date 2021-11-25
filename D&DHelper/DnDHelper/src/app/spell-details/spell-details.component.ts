import { SpellDetails } from './../spells.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellsService } from '../spells.service';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {
  spellDetails: SpellDetails | undefined
  constructor(private route: ActivatedRoute, private spell:SpellsService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const spellIndexFromRoute = String(routeParams.get('spellIndex'));

    this.spell.getSpell(spellIndexFromRoute).subscribe(data => this.spellDetails = {
      index: (data as any).index,
      name: (data as any).name,
      desc: (data as any).desc,
      higher_level: (data as any).higher_level,
      range: (data as any).range,
      components: (data as any).components,
      material: (data as any).material,
      ritual: (data as any).ritual,
      duration: (data as any).duration,
      concentration: (data as any).concentration,
      casting_time: (data as any).casting_time,
      level: (data as any).level,
      attack_type: (data as any).attack_type,
      damage: (data as any).damage,
      dc: (data as any).dc,
      area_of_effect: (data as any).area_of_effect,
      school: (data as any).school,
      classes: (data as any).classes,
      subclasses: (data as any).subclasses,
      url: (data as any).url,
    })
  }

}
