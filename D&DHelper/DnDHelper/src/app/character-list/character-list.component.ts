import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: Firestore) {
    const Collection = collection(firestore, 'items');
    this.items = collectionData(Collection);
  }
  ngOnInit() {
  }

}
