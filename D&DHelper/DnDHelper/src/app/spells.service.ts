import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http:HttpClient) { }

  getData() : Observable<Spell[]> {
    let url = "https://www.dnd5eapi.co/api/spells/";
    return this.http.get<Spell[]>(url);
  }
}
export interface Spell{
  index: string;
  name: string;
  url: string;
}

