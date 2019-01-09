import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditCourseComponent } from './teacher-edit-course.component';

describe('TeacherEditCourseComponent', () => {
  let component: TeacherEditCourseComponent;
  let fixture: ComponentFixture<TeacherEditCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEditCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
