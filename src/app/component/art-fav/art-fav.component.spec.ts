import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFavComponent } from './art-fav.component';

describe('ArtFavComponent', () => {
  let component: ArtFavComponent;
  let fixture: ComponentFixture<ArtFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtFavComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
