import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrePage } from './offre.page';

describe('OffrePage', () => {
  let component: OffrePage;
  let fixture: ComponentFixture<OffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
