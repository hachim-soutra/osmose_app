import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemmandesListComponent } from './demmandes-list.component';

describe('DemmandesListComponent', () => {
  let component: DemmandesListComponent;
  let fixture: ComponentFixture<DemmandesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemmandesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemmandesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
