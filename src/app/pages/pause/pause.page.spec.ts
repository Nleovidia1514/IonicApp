import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePage } from './pause.page';

describe('PausePage', () => {
  let component: PausePage;
  let fixture: ComponentFixture<PausePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
