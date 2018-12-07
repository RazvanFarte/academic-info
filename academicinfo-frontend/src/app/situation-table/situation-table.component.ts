import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Situation} from "../shared/models/Situation";
import {CourseService} from "../services/course/course.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-situation-table',
  templateUrl: './situation-table.component.html',
  styleUrls: ['./situation-table.component.css']
})
export class SituationTableComponent implements OnInit {

  @Input() situations: Situation[];
  public displayedColumns: string[];
  @Input() selection;
  @Input() gradeFormControls: FormControl[];
  @Input() editable: boolean;
  gradeErrorMatcher;
  fc;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.displayedColumns = ['student_name', 'is_present', 'grade'];
    this.gradeErrorMatcher = new MyErrorStateMatcher();
    this.fc = [];
    this.resetFormControl();
  }


  getIndexForSituation(situation: Situation) {
    return this.situations.findIndex(s => s.id === situation.id);
  }

  resetFormControl(){
    this.fc = this.gradeFormControls;
    //this.gradeFormControls.forEach(f => this.fc.push(new FormControl(f.value)));
  }

}
