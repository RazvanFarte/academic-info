import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationTableComponent } from './situation-table.component';

describe('SituationTableComponent', () => {
  let component: SituationTableComponent;
  let fixture: ComponentFixture<SituationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
