import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuPage } from './lieu.page';

describe('LieuPage', () => {
  let component: LieuPage;
  let fixture: ComponentFixture<LieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
