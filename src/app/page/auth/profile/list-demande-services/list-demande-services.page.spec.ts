import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeServicesPage } from './list-demande-services.page';

describe('ListDemandeServicesPage', () => {
  let component: ListDemandeServicesPage;
  let fixture: ComponentFixture<ListDemandeServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandeServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
