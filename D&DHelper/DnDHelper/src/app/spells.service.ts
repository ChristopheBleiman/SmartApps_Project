import { DoCheck, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = "https://www.dnd5eapi.co/api/spells/";
    return this.http.get<SpellList>(url);
  }
  getSpell(index: string) {
    let url = "https://www.dnd5eapi.co/api/spells/";
    url = url.concat(index)
    return this.http.get<SpellDetails>(url);
  }
}
export interface Spell{
  index: string;
  name: string;
  url: string;
}
export interface SpellList{
  count: any;
  results: Spell[];
}
export interface SpellDetails{
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: any;
  attack_type: string;
  damage: damage;
  dc: dc;
  area_of_effect: area_of_effect;
  school: school;
  classes: classDnD[];
  subclasses: subclass[];
  url: string;
}
export interface damage{
  damage_type: damage_type;
  damage_at_slot_level: damage_at_slot_level;
}
export interface damage_type{
  index: string;
  name: string;
  url: string;
}
export interface damage_at_slot_level{
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}
export interface dc{
  dc_type: dc_type;
  dc_success: string;
}
export interface dc_type{
  index: string;
  name: string;
  url: string;
}
export interface area_of_effect{
  type: string;
  size: string;
}
export interface school{
  index: string;
  name: string;
  url: string;
}
export interface classDnD{
  index: string;
  name: string;
  url: string;
}
export interface subclass{
  index: string;
  name: string;
  url: string;
}

