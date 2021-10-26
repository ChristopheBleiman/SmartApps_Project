/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DicerollerComponent } from './diceroller.component';

describe('DicerollerComponent', () => {
  let component: DicerollerComponent;
  let fixture: ComponentFixture<DicerollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicerollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicerollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
