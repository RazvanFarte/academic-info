import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddCourseComponent } from './teacher-add-course.component';

describe('TeacherAddCourseComponent', () => {
  let component: TeacherAddCourseComponent;
  let fixture: ComponentFixture<TeacherAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
