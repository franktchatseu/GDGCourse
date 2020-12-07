import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLatestComponent } from './course-latest.component';

describe('CourseLatestComponent', () => {
  let component: CourseLatestComponent;
  let fixture: ComponentFixture<CourseLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
