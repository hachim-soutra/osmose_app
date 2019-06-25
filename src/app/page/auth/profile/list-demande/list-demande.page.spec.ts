import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandePage } from './list-demande.page';

describe('ListDemandePage', () => {
  let component: ListDemandePage;
  let fixture: ComponentFixture<ListDemandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
