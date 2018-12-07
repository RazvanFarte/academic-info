import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSituationComponent } from './professor-situation.component';

describe('ProfessorSituationComponent', () => {
  let component: ProfessorSituationComponent;
  let fixture: ComponentFixture<ProfessorSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
