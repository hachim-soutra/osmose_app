import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemiognagePage } from './temiognage.page';

describe('TemiognagePage', () => {
  let component: TemiognagePage;
  let fixture: ComponentFixture<TemiognagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemiognagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemiognagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
