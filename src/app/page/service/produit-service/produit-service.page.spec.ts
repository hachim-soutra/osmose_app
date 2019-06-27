import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitServicePage } from './produit-service.page';

describe('ProduitServicePage', () => {
  let component: ProduitServicePage;
  let fixture: ComponentFixture<ProduitServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
