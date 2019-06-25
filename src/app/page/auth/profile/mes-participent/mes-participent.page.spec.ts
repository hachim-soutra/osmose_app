import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesParticipentPage } from './mes-participent.page';

describe('MesParticipentPage', () => {
  let component: MesParticipentPage;
  let fixture: ComponentFixture<MesParticipentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesParticipentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesParticipentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
