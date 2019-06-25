import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCatPage } from './produit-cat.page';

describe('ProduitCatPage', () => {
  let component: ProduitCatPage;
  let fixture: ComponentFixture<ProduitCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
