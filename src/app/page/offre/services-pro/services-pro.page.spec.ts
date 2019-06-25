import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProPage } from './services-pro.page';

describe('ServicesProPage', () => {
  let component: ServicesProPage;
  let fixture: ComponentFixture<ServicesProPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
