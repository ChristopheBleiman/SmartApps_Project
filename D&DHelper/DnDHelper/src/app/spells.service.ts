import { Injectable } from '@angular/core';
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
