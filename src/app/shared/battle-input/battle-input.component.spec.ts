/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BattleInputComponent } from './battle-input.component';

describe('BattleInputComponent', () => {
  let component: BattleInputComponent;
  let fixture: ComponentFixture<BattleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
