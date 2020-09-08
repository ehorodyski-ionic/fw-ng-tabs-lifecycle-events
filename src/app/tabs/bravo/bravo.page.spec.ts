import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BravoPage } from './bravo.page';

describe('BravoPage', () => {
  let component: BravoPage;
  let fixture: ComponentFixture<BravoPage>;

  beforeEach(async(() => {
    const config = {
      declarations: [
        BravoPage,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BravoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
