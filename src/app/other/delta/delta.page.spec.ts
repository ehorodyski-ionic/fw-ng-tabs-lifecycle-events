import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeltaPage } from './delta.page';

describe('DeltaPage', () => {
  let component: DeltaPage;
  let fixture: ComponentFixture<DeltaPage>;

  beforeEach(async(() => {
    const config = {
      declarations: [
        DeltaPage,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
