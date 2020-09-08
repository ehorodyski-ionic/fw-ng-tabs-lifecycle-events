import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CharliePage } from './charlie.page';

describe('CharliePage', () => {
  let component: CharliePage;
  let fixture: ComponentFixture<CharliePage>;

  beforeEach(async(() => {
    const config = {
      declarations: [
        CharliePage,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
