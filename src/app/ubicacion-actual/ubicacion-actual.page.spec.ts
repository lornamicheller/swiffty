import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionActualPage } from './ubicacion-actual.page';

describe('UbicacionActualPage', () => {
  let component: UbicacionActualPage;
  let fixture: ComponentFixture<UbicacionActualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionActualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
