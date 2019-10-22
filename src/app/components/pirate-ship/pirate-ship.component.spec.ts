import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateShipComponent } from './pirate-ship.component';

describe('PirateShipComponent', () => {
  let component: PirateShipComponent;
  let fixture: ComponentFixture<PirateShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateShipComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
