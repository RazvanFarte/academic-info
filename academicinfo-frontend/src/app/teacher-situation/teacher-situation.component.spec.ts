import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSituationComponent } from './teacher-situation.component';

describe('TeacherSituationComponent', () => {
  let component: TeacherSituationComponent;
  let fixture: ComponentFixture<TeacherSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
