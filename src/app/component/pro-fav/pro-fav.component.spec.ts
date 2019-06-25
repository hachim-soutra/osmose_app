import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFavComponent } from './pro-fav.component';

describe('ProFavComponent', () => {
  let component: ProFavComponent;
  let fixture: ComponentFixture<ProFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProFavComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
