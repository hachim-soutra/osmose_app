import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailvisitePage } from './detailvisite.page';

describe('DetailvisitePage', () => {
  let component: DetailvisitePage;
  let fixture: ComponentFixture<DetailvisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailvisitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailvisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
