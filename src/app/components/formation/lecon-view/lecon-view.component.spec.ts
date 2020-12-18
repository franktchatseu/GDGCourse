import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeconViewComponent } from './lecon-view.component';

describe('LeconViewComponent', () => {
  let component: LeconViewComponent;
  let fixture: ComponentFixture<LeconViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeconViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeconViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
