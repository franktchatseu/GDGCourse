import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilComponentAdmin } from './acceuil.component';

describe('AcceuilComponentAdmin', () => {
  let component: AcceuilComponentAdmin;
  let fixture: ComponentFixture<AcceuilComponentAdmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilComponentAdmin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
