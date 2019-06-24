import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCodigoPage } from './verificar-codigo.page';

describe('VerificarCodigoPage', () => {
  let component: VerificarCodigoPage;
  let fixture: ComponentFixture<VerificarCodigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarCodigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
