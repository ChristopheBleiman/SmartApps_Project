/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddInitComponent } from './add-init.component';

describe('AddInitComponent', () => {
  let component: AddInitComponent;
  let fixture: ComponentFixture<AddInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
