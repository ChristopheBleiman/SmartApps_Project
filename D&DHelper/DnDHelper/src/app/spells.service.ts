import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = "https://www.dnd5eapi.co/api/spells/";
    return this.http.get(url);
  }
}
