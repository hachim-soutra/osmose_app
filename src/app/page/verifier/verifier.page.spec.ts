import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierPage } from './verifier.page';

describe('VerifierPage', () => {
  let component: VerifierPage;
  let fixture: ComponentFixture<VerifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
